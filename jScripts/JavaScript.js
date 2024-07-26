var fullName = document.getElementById('full-name'); // משתנה המקבל את הערך שיוזן בשם
var comments = document.getElementById('comments'); // משתנה המקבל את הערך שיוזן בהערות 
var submitButton = document.getElementById('submit-button'); // כפתור שלח הזמנה שבשלב זה עוד לא זמין
var scoops = document.getElementsByName('scoops'); // כפתורי רדיו לבחירת מספר כדורי גלידה
var toppings = document.getElementsByName('toppings'); // כפתורי צקבוקס לבחירת תוספות

var toppingImages = [ // פתיחת מערך של תמונות התוספות
    document.getElementById('topping-chocolate'),
    document.getElementById('topping-rainbow'),
    document.getElementById('topping-cherries')
]
var scoopsImages = [ // פתיחת מערך של תמונות הכדורים
    document.getElementById('ice-cream-1'),
    document.getElementById('ice-cream-2'),
    document.getElementById('ice-cream-3'),
]
function changeOpacity() { // פונקציה שבודקת מתי לשנות את השקיפות בתמונות התוספות 
    for (var i = 0; i < toppings.length; i++) { // לולאה שעוברת על כל תיבות הסימון של התוספות
        if (toppings[i].checked) { // אם התוספת מסומנת , התמונה תוצג ללא שקיפות
            toppingImages[i].style.opacity = '1'
        } else { // אם התוספת לא מסומנת, התמונה בחצי שקיפות
            toppingImages[i].style.opacity = '0.5'
        }
    }
}

function showImage() { // פונקציה שבודקת איזה תמונה להציג בהתאם לבחירת המשתמש
    for (var i = 0; i < scoops.length; i++) {
        if (scoops[i].checked) { //אם כפתור הרדיו מסומן, הצגת התמונה המתאימה
            scoopsImages[i].style.display = 'block'
        } else { // אם כפתור הרדיו לא מסומן, הסתרת התמונה 
            scoopsImages[i].style.display = 'none'
        }
    }
    updateButton() // בדיקה אם לעדכן את זמינות כפתור השליחה 
}
function updateButton() { // פונקציה הבודקת אם לעדכן את זמינות הכפתור
    var radioChecked = 0; // משתנה לבדיקה אם כפתור הרדיו מסומן - בתור התחלה 0 כי עדיין לא מסומן
    for (var i = 0; i < scoops.length; i++) { // לולאה העוברת על כל כפתורי הרדיו
        if (scoops[i].checked) { // אם כפתור נלחץ
            radioChecked = 1; // אז המשתנה יהפוך ל1
            break; // שלא ימשיך בבדיקה על עוד כפתור נלחץ
        }
    }
    submitButton.disabled = !(fullName.value != '' && radioChecked); // הפיכת הכפתור לזמין אם שם מלא וכפתור רדיו מסומן
}
function onFormSubmit() { // פונקציה שמופעלת על ידי לחיצה על כפתור שלח הזמנה 
    var name = fullName.value; // שמירת שם מלא שהוזן
    var commentText = comments.value; // שמירת ההערות שהוזנו
    var scoopvalue; // משתנה לשמירת מספר כדורי הגלידה שנבחרו
    for (var i = 0; i < scoops.length; i++) { // לולאה העוברת על כפתורי הרדיו 
        if (scoops[i].checked) { // אם כפתור נלחץ
            scoopValue = scoops[i].value; // שמירת מספר כדורי הגלידה שנבחרו 
            break; // שלא ימשיך בבדיקה כל עוד כפתור נלחץ
        }
    }
    var toppingList = []; // יצירת מערך ריק לאחסון התוספות שיבחרו 
    for (var i = 0; i < toppings.length; i++) { // לולאה העוברת על כל תיבות הסימון של התוספות
        if (toppings[i].checked) { // בדיקה אם תוספת נבחרה
            toppingList[toppingList.length] = toppings[i].nextSibling.textContent; // שמירת התוספות שנבחרו 
        }
    }
    // יצירת הודעת סיכום ההזמנה 
    var message = "שלום " + name + ",\n\nהזמנתך התקבלה עם הפרטים הבאים:\n";
    message += "מספר כדורי גלידה: " + scoopValue + "\n";
    message += "תוספות: " + toppingList + "\n";
    message += "הערות: " + commentText + "\n\nבתיאבון!";

    alert(message); // הצגת הודעת הסיכום למשתמש
};

