/**
 * ============================================================================
 * SafePK — Dedicated Feedback & Reviews Google Apps Script (Code.gs)
 * ============================================================================
 * - 100% Separate from Help Center (NO Email Notifications at all)
 * - Sheet Tab Name: "Sheet1" (also supports "Feedback_Reviews" automatically)
 * - Columns (A to H):
 *   A: Review ID
 *   B: Date
 *   C: Time
 *   D: Name
 *   E: Email
 *   F: Rating
 *   G: Review Details
 *   H: Visibility
 * ============================================================================
 */
/* Khali line readability aur clean structure ke liye */
const SHEET_NAME = 'Sheet1'; /* 'SHEET_NAME' variable initialize aur assign kiya ja raha hai */
const REVIEW_ID_PREFIX = 'REV-'; /* 'REVIEW_ID_PREFIX' variable initialize aur assign kiya ja raha hai */
/* Khali line readability aur clean structure ke liye */
function getFeedbackSheet_() { /* 'getFeedbackSheet_' function shuru ho raha hai jo specific logic perform karega */
  const ss = SpreadsheetApp.getActiveSpreadsheet(); /* 'ss' variable initialize aur assign kiya ja raha hai */
  // Uses "Sheet1" (or "Feedback_Reviews" / first tab if renamed)
  return ( /* Function se final result wapas bheja ja raha hai */
    ss.getSheetByName(SHEET_NAME) || /* Yeh code statement execute ho rahi hai */
    ss.getSheetByName('Feedback_Reviews') || /* Yeh code statement execute ho rahi hai */
    ss.getSheets()[0] /* Yeh code statement execute ho rahi hai */
  ); /* Function call ya callback block band ho raha hai */
} /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
function createJsonResponse_(payload) { /* 'createJsonResponse_' function shuru ho raha hai jo specific logic perform karega */
  return ContentService /* Function se final result wapas bheja ja raha hai */
    .createTextOutput(JSON.stringify(payload)) /* Yeh code statement execute ho rahi hai */
    .setMimeType(ContentService.MimeType.JSON); /* Yeh code statement execute ho rahi hai */
} /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
// Check if Column H (Visibility) is "Approve" or "Approved" (case-insensitive)
function isApproved_(val) { /* 'isApproved_' function shuru ho raha hai jo specific logic perform karega */
  if (val === null || val === undefined) return false; /* Shart (condition) check ki ja rahi hai */
  const clean = String(val).trim().toLowerCase(); /* 'clean' variable initialize aur assign kiya ja raha hai */
  return clean === 'approve' || clean === 'approved'; /* Function se final result wapas bheja ja raha hai */
} /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
function cleanText_(val, maxLen) { /* 'cleanText_' function shuru ho raha hai jo specific logic perform karega */
  if (val === null || val === undefined) return ''; /* Shart (condition) check ki ja rahi hai */
  const str = String(val).trim(); /* 'str' variable initialize aur assign kiya ja raha hai */
  return maxLen ? str.slice(0, maxLen) : str; /* Function se final result wapas bheja ja raha hai */
} /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
function formatDate_(rawDate, tz) { /* 'formatDate_' function shuru ho raha hai jo specific logic perform karega */
  if (!rawDate) return ''; /* Shart (condition) check ki ja rahi hai */
  if (Object.prototype.toString.call(rawDate) === '[object Date]' && !isNaN(rawDate.getTime())) { /* Shart (condition) check ki ja rahi hai */
    return Utilities.formatDate(rawDate, tz, 'dd-MM-yyyy'); /* Function se final result wapas bheja ja raha hai */
  } /* Code block ya object yahan mukammal ho raha hai */
  return String(rawDate).trim(); /* Function se final result wapas bheja ja raha hai */
} /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
/**
 * 1. GET Request — Website fetches public approved reviews & rating summary
 */
function doGet(e) { /* 'doGet' function shuru ho raha hai jo specific logic perform karega */
  try { /* Safe execution block shuru taake error aane par app crash na ho */
    const ss = SpreadsheetApp.getActiveSpreadsheet(); /* 'ss' variable initialize aur assign kiya ja raha hai */
    const sheet = getFeedbackSheet_(); /* 'sheet' variable initialize aur assign kiya ja raha hai */
    const tz = ss.getSpreadsheetTimeZone() || Session.getScriptTimeZone() || 'Asia/Karachi'; /* 'tz' variable initialize aur assign kiya ja raha hai */
/* Khali line readability aur clean structure ke liye */
    const emptySummary = { /* 'emptySummary' object data structure shuru ho raha hai */
      totalApproved: 0, /* Object ki 'totalApproved' property set ki ja rahi hai */
      averageRating: null, /* Object ki 'averageRating' property set ki ja rahi hai */
      distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } /* Object ki 'distribution' property set ki ja rahi hai */
    }; /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
    if (!sheet || sheet.getLastRow() <= 1) { /* Shart (condition) check ki ja rahi hai */
      return createJsonResponse_({ /* Function se final result wapas bheja ja raha hai */
        status: 'success', /* Object ki 'status' property set ki ja rahi hai */
        summary: emptySummary, /* Object ki 'summary' property set ki ja rahi hai */
        reviews: [] /* Object ki 'reviews' property set ki ja rahi hai */
      }); /* Function call ya callback block band ho raha hai */
    } /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
    // Read columns A to H from row 2 downwards
    const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, 8).getValues(); /* 'rows' variable initialize aur assign kiya ja raha hai */
/* Khali line readability aur clean structure ke liye */
    const approvedReviews = []; /* 'approvedReviews' variable initialize aur assign kiya ja raha hai */
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }; /* 'distribution' variable initialize aur assign kiya ja raha hai */
    let ratingSum = 0; /* 'ratingSum' variable initialize aur assign kiya ja raha hai */
    let totalApproved = 0; /* 'totalApproved' variable initialize aur assign kiya ja raha hai */
/* Khali line readability aur clean structure ke liye */
    for (let i = 0; i < rows.length; i++) { /* Loop chala kar har item ko process kiya ja raha hai */
      const row = rows[i]; /* 'row' variable initialize aur assign kiya ja raha hai */
      const reviewId = cleanText_(row[0], 40); /* 'reviewId' variable initialize aur assign kiya ja raha hai */
      const rawDate = row[1]; /* 'rawDate' variable initialize aur assign kiya ja raha hai */
      const name = cleanText_(row[3], 80); /* 'name' variable initialize aur assign kiya ja raha hai */
      // row[4] is Email — NEVER sent to public website
      const rawRating = Number(row[5]); /* 'rawRating' variable initialize aur assign kiya ja raha hai */
      const details = cleanText_(row[6], 1000); /* 'details' variable initialize aur assign kiya ja raha hai */
      const visibility = row[7]; /* 'visibility' variable initialize aur assign kiya ja raha hai */
/* Khali line readability aur clean structure ke liye */
      // Only include if Visibility (Column H) is Approve or Approved
      if (!isApproved_(visibility)) continue; /* Shart (condition) check ki ja rahi hai */
/* Khali line readability aur clean structure ke liye */
      const rating = Math.round(rawRating); /* 'rating' variable initialize aur assign kiya ja raha hai */
      if (isNaN(rating) || rating < 1 || rating > 5) continue; /* Shart (condition) check ki ja rahi hai */
/* Khali line readability aur clean structure ke liye */
      totalApproved++; /* Yeh code statement execute ho rahi hai */
      ratingSum += rating; /* Yeh code statement execute ho rahi hai */
      distribution[rating] = (distribution[rating] || 0) + 1; /* Yeh code statement execute ho rahi hai */
/* Khali line readability aur clean structure ke liye */
      approvedReviews.push({ /* Yeh code statement execute ho rahi hai */
        reviewId: reviewId, /* Object ki 'reviewId' property set ki ja rahi hai */
        date: formatDate_(rawDate, tz), /* Object ki 'date' property set ki ja rahi hai */
        name: name || 'Community Member', /* Object ki 'name' property set ki ja rahi hai */
        rating: rating, /* Object ki 'rating' property set ki ja rahi hai */
        details: details /* Object ki 'details' property set ki ja rahi hai */
      }); /* Function call ya callback block band ho raha hai */
    } /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
    // Show newest approved reviews first
    approvedReviews.reverse(); /* Yeh code statement execute ho rahi hai */
/* Khali line readability aur clean structure ke liye */
    const averageRating = totalApproved > 0 /* 'averageRating' variable initialize aur assign kiya ja raha hai */
      ? Number((ratingSum / totalApproved).toFixed(2)) /* Yeh code statement execute ho rahi hai */
      : null; /* Yeh code statement execute ho rahi hai */
/* Khali line readability aur clean structure ke liye */
    return createJsonResponse_({ /* Function se final result wapas bheja ja raha hai */
      status: 'success', /* Object ki 'status' property set ki ja rahi hai */
      summary: { /* Object ki 'summary' property set ki ja rahi hai */
        totalApproved: totalApproved, /* Object ki 'totalApproved' property set ki ja rahi hai */
        averageRating: averageRating, /* Object ki 'averageRating' property set ki ja rahi hai */
        distribution: distribution /* Object ki 'distribution' property set ki ja rahi hai */
      }, /* Code block ya object yahan mukammal ho raha hai */
      reviews: approvedReviews /* Object ki 'reviews' property set ki ja rahi hai */
    }); /* Function call ya callback block band ho raha hai */
  } catch (err) { /* Error aane ki soorat me usay safely handle kiya ja raha hai */
    return createJsonResponse_({ /* Function se final result wapas bheja ja raha hai */
      status: 'error', /* Object ki 'status' property set ki ja rahi hai */
      message: err && err.message ? err.message : 'Unable to load reviews.' /* Object ki 'message' property set ki ja rahi hai */
    }); /* Function call ya callback block band ho raha hai */
  } /* Code block ya object yahan mukammal ho raha hai */
} /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
/**
 * 2. POST Request — Website saves a new Feedback & Review row to Sheet1
 *    (NO email notification is sent)
 */
function doPost(e) { /* 'doPost' function shuru ho raha hai jo specific logic perform karega */
  const lock = LockService.getScriptLock(); /* 'lock' variable initialize aur assign kiya ja raha hai */
  lock.waitLock(10000); /* Yeh code statement execute ho rahi hai */
/* Khali line readability aur clean structure ke liye */
  try { /* Safe execution block shuru taake error aane par app crash na ho */
    let data = {}; /* 'data' variable initialize aur assign kiya ja raha hai */
    if (e && e.parameter) { /* Shart (condition) check ki ja rahi hai */
      Object.keys(e.parameter).forEach(function (k) { /* Yeh code statement execute ho rahi hai */
        data[k] = e.parameter[k]; /* Yeh code statement execute ho rahi hai */
      }); /* Function call ya callback block band ho raha hai */
    } /* Code block ya object yahan mukammal ho raha hai */
    if (e && e.postData && e.postData.contents) { /* Shart (condition) check ki ja rahi hai */
      try { /* Safe execution block shuru taake error aane par app crash na ho */
        const parsed = JSON.parse(e.postData.contents); /* 'parsed' variable initialize aur assign kiya ja raha hai */
        if (parsed && typeof parsed === 'object') { /* Shart (condition) check ki ja rahi hai */
          Object.keys(parsed).forEach(function (k) { /* Yeh code statement execute ho rahi hai */
            data[k] = parsed[k]; /* Yeh code statement execute ho rahi hai */
          }); /* Function call ya callback block band ho raha hai */
        } /* Code block ya object yahan mukammal ho raha hai */
      } catch (err) {} /* Error aane ki soorat me usay safely handle kiya ja raha hai */
    } /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
    const name = cleanText_(data.Name || data.name || '', 80); /* 'name' variable initialize aur assign kiya ja raha hai */
    const email = cleanText_(data.Email || data.email || '', 120); /* 'email' variable initialize aur assign kiya ja raha hai */
    const rating = Number(data.Rating !== undefined ? data.Rating : data.rating); /* 'rating' variable initialize aur assign kiya ja raha hai */
    const details = cleanText_(data['Review Details'] || data.details || '', 1000); /* 'details' variable initialize aur assign kiya ja raha hai */
/* Khali line readability aur clean structure ke liye */
    if (!name || name.length < 2) { /* Shart (condition) check ki ja rahi hai */
      return createJsonResponse_({ status: 'error', message: 'Please enter a valid name.' }); /* Function se final result wapas bheja ja raha hai */
    } /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; /* 'emailRegex' variable initialize aur assign kiya ja raha hai */
    if (!email || !emailRegex.test(email)) { /* Shart (condition) check ki ja rahi hai */
      return createJsonResponse_({ status: 'error', message: 'Please enter a valid email address.' }); /* Function se final result wapas bheja ja raha hai */
    } /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) { /* Shart (condition) check ki ja rahi hai */
      return createJsonResponse_({ status: 'error', message: 'Rating must be between 1 and 5 stars.' }); /* Function se final result wapas bheja ja raha hai */
    } /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
    if (!details || details.length < 5) { /* Shart (condition) check ki ja rahi hai */
      return createJsonResponse_({ status: 'error', message: 'Please enter review details.' }); /* Function se final result wapas bheja ja raha hai */
    } /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
    const ss = SpreadsheetApp.getActiveSpreadsheet(); /* 'ss' variable initialize aur assign kiya ja raha hai */
    const sheet = getFeedbackSheet_(); /* 'sheet' variable initialize aur assign kiya ja raha hai */
/* Khali line readability aur clean structure ke liye */
    // Ensure headers exist in row 1 if sheet is empty
    if (sheet.getLastRow() === 0) { /* Shart (condition) check ki ja rahi hai */
      sheet.appendRow([ /* Yeh code statement execute ho rahi hai */
        'Review ID', /* Yeh code statement execute ho rahi hai */
        'Date', /* Yeh code statement execute ho rahi hai */
        'Time', /* Yeh code statement execute ho rahi hai */
        'Name', /* Yeh code statement execute ho rahi hai */
        'Email', /* Yeh code statement execute ho rahi hai */
        'Rating', /* Yeh code statement execute ho rahi hai */
        'Review Details', /* Yeh code statement execute ho rahi hai */
        'Visibility' /* Yeh code statement execute ho rahi hai */
      ]); /* Yeh code statement execute ho rahi hai */
    } /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */
    const nextRow = sheet.getLastRow() + 1; /* 'nextRow' variable initialize aur assign kiya ja raha hai */
    const seqNum = Math.max(1, nextRow - 1); /* 'seqNum' variable initialize aur assign kiya ja raha hai */
    const reviewId = REVIEW_ID_PREFIX + String(seqNum).padStart(4, '0'); /* 'reviewId' variable initialize aur assign kiya ja raha hai */
/* Khali line readability aur clean structure ke liye */
    const tz = ss.getSpreadsheetTimeZone() || Session.getScriptTimeZone() || 'Asia/Karachi'; /* 'tz' variable initialize aur assign kiya ja raha hai */
    const now = new Date(); /* 'now' variable initialize aur assign kiya ja raha hai */
    const dateStr = Utilities.formatDate(now, tz, 'dd-MM-yyyy'); /* 'dateStr' variable initialize aur assign kiya ja raha hai */
    const timeStr = Utilities.formatDate(now, tz, 'hh:mm a'); /* 'timeStr' variable initialize aur assign kiya ja raha hai */
/* Khali line readability aur clean structure ke liye */
    // Column H (Visibility) stays blank until Admin types "Approve" or "Approved"
    const visibility = ''; /* 'visibility' variable initialize aur assign kiya ja raha hai */
/* Khali line readability aur clean structure ke liye */
    sheet.appendRow([ /* Yeh code statement execute ho rahi hai */
      reviewId, /* Yeh code statement execute ho rahi hai */
      dateStr, /* Yeh code statement execute ho rahi hai */
      timeStr, /* Yeh code statement execute ho rahi hai */
      name, /* Yeh code statement execute ho rahi hai */
      email, /* Yeh code statement execute ho rahi hai */
      rating, /* Yeh code statement execute ho rahi hai */
      details, /* Yeh code statement execute ho rahi hai */
      visibility /* Yeh code statement execute ho rahi hai */
    ]); /* Yeh code statement execute ho rahi hai */
/* Khali line readability aur clean structure ke liye */
    return createJsonResponse_({ /* Function se final result wapas bheja ja raha hai */
      status: 'success', /* Object ki 'status' property set ki ja rahi hai */
      target: 'Feedback_Reviews', /* Object ki 'target' property set ki ja rahi hai */
      reviewId: reviewId, /* Object ki 'reviewId' property set ki ja rahi hai */
      date: dateStr, /* Object ki 'date' property set ki ja rahi hai */
      time: timeStr /* Object ki 'time' property set ki ja rahi hai */
    }); /* Function call ya callback block band ho raha hai */
  } catch (err) { /* Error aane ki soorat me usay safely handle kiya ja raha hai */
    return createJsonResponse_({ /* Function se final result wapas bheja ja raha hai */
      status: 'error', /* Object ki 'status' property set ki ja rahi hai */
      message: err && err.message ? err.message : 'Failed to save feedback.' /* Object ki 'message' property set ki ja rahi hai */
    }); /* Function call ya callback block band ho raha hai */
  } finally { /* Yeh code statement execute ho rahi hai */
    lock.releaseLock(); /* Yeh code statement execute ho rahi hai */
  } /* Code block ya object yahan mukammal ho raha hai */
} /* Code block ya object yahan mukammal ho raha hai */
/* Khali line readability aur clean structure ke liye */