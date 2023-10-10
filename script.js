   // Получаем текущую дату
   const now = new Date();
   const h = now.getHours();
   const openNewLesson = 19 // start new lesson
   
   const notOpenButonText = "Зараз недоступно";
   const todayOpenDayText = "🏃 Біжимо марафон тут";
   const newOpenDetailsButonText = "Погнали";
   const ifHoursAfter = (h >= openNewLesson) && (h < 23.59);
   const ifHoursBefore = (h >= 0) && (h < openNewLesson);
   localStorage.setItem('now', now.toISOString());
   const savedDateStr = localStorage.getItem('now');
   
  function getNextMonday() {
   const today = new Date();
   const currentDayOfWeek = today.getDay(); // Получаем текущий день недели (0 - воскресенье, 1 - понедельник, и так далее)
 
   if (currentDayOfWeek === 1 && today.getHours() < 19) {
     // Если сегодня понедельник и время меньше 19:00, то возвращаем сегодняшнюю дату
     return today;
   } else {
     // Иначе находим количество дней до ближайшего понедельника и прибавляем это количество дней к текущей дате
     const daysUntilMonday = currentDayOfWeek === 1 ? 7 : (8 - currentDayOfWeek);
     const nextMonday = new Date(today);
     nextMonday.setDate(today.getDate() + daysUntilMonday);
     return nextMonday;
   }
 }
 
 function saveNextMondayDate() {
   const nextMonday = getNextMonday();
   localStorage.setItem('nextMondayDate', nextMonday.toISOString());
 }
 
 function getNextMondayFromLocalStorage() {
   const storedDate = localStorage.getItem('nextMondayDate');
   if (storedDate) {
     return new Date(storedDate);
   }
   return null;
 }
 
 const storedMonday = getNextMondayFromLocalStorage();
 
 if (!storedMonday || storedMonday < new Date()) {
   // Если сохраненной даты нет или она уже прошла, сохраняем новую
   saveNextMondayDate();
 }
 
 const nextMonday = getNextMondayFromLocalStorage();
   
 if (savedDateStr) {
   const savedDate = new Date(savedDateStr);
   const currentDate = new Date();
   const millisecondsInADay = 24 * 60 * 60 * 1000; // Количество миллисекунд в одном дне
   const daysDifference = Math.floor((currentDate - savedDate) / millisecondsInADay) + 1;
   
   if(localStorage.getItem("marathonProgress") === 100){
   localStorage.setItem('startMarafon', 'allOpen');
   }
   else if (daysDifference > 7) {
     localStorage.setItem('startMarafon', 'allOpen');
   } else {
     if (now.getDay() === 1 && ifHoursBefore) {
       localStorage.setItem('startMarafon', 'notOpen');
     } else {
       if (now.getDay() === 1 && ifHoursAfter) {
         localStorage.setItem('startMarafon', 'goMarafon');
       } 
     }
   }
 }
 // Получаем дату ближайшего будущего понедельника в формате "год-месяц-день"
 const formattedNextMonday = `${String(nextMonday.getDate()).padStart(2, '0')}.${String(nextMonday.getMonth() + 1).padStart(2, '0')}.${nextMonday.getFullYear()}`; 
   
 const formattedNextTuesday = '🔑 ' + `${String(nextMonday.getDate() + 1).padStart(2, '0')}.${String(nextMonday.getMonth() + 1).padStart(2, '0')}.${nextMonday.getFullYear()}`;
   
 const formattedNextWensday = '🔑 ' + `${String(nextMonday.getDate() + 2).padStart(2, '0')}.${String(nextMonday.getMonth() + 1).padStart(2, '0')}.${nextMonday.getFullYear()}`;  
 
 const formattedNextThirsday = '🔑 ' + `${String(nextMonday.getDate() + 3).padStart(2, '0')}.${String(nextMonday.getMonth() + 1).padStart(2, '0')}.${nextMonday.getFullYear()}`; 
   
 const formattedNextFriyday = '🔑 ' + `${String(nextMonday.getDate() + 4).padStart(2, '0')}.${String(nextMonday.getMonth() + 1).padStart(2, '0')}.${nextMonday.getFullYear()}`;  
   
 const formattedNextSeterday = '🔑 ' + `${String(nextMonday.getDate() + 5).padStart(2, '0')}.${String(nextMonday.getMonth() + 1).padStart(2, '0')}.${nextMonday.getFullYear()}`; 
   
 const formattedNextSunday = '🔑 ' + `${String(nextMonday.getDate() + 6).padStart(2, '0')}.${String(nextMonday.getMonth() + 1).padStart(2, '0')}.${nextMonday.getFullYear()}`;  
   //////////////////////////////////////
 const marafonNextTuesday = '🔑 ' + `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
   
 const marafonNextWensday = '🔑 ' + `${String(now.getDate() + 1).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;  
 
 const marafonNextThirsday = '🔑 ' + `${String(now.getDate() + 2).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`; 
   
 const marafonNextFriyday = '🔑 ' + `${String(now.getDate() + 3).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;  
   
 const marafonNextSeterday = '🔑 ' + `${String(now.getDate() + 4).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`; 
   
 const marafonNextSunday = '🔑 ' + `${String(now.getDate() + 5).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;   
   
   const expr = localStorage.getItem('startMarafon');
 // Выполняем соответствующие действия на основе значения expr
 switch (expr) {
     case 'notOpen':
         notOpen();
         break;
     case 'goMarafon':
     const textShow = document.querySelector("span.timer-no-1");
     textShow.className = "textshow-1";
     document.getElementsByClassName('textshow-1')[0].textContent = " Біжимо марафон:";
 document.addEventListener("DOMContentLoaded", function () {
     /////////////////////////////////////////////////////////////
    const progressBar = document.querySelector(".progress");
    const progressText = document.querySelector('.progress-text');
     const totalTime = 8 * 24 * 60 * 60 * 1000; // Общее время в миллисекундах (7 дней)
     let progressPercentage = 0;
 
     // Проверяем, есть ли сохраненный прогресс в localStorage
     const savedProgress = localStorage.getItem("marathonProgress");
     if (savedProgress) {
         progressPercentage = parseFloat(savedProgress);
     }
 
     function updateProgress() {
         const currentDate = new Date();
         const currentDay = currentDate.getDay(); // День недели (0 - воскресенье, 1 - понедельник, и т.д.)
         const currentTime = currentDate.getHours() * 3600000 + // Время в миллисекундах
                            currentDate.getMinutes() * 60000 +
                            currentDate.getSeconds() * 1000 +
                            currentDate.getMilliseconds();
 
         // Находим ближайший следующий понедельник в 19:00
         const nextMonday = new Date(currentDate);
         nextMonday.setDate(currentDate.getDate() + (1 + (7 - currentDay)) % 7); // Находим следующий понедельник
         nextMonday.setHours(19, 0, 0, 0);
 
         // Вычисляем оставшееся время до понедельника 19:00
         const timeUntilMonday = nextMonday - currentDate;
 
         if (timeUntilMonday >= 0 && timeUntilMonday < totalTime) {
             // Если сегодня понедельник и время меньше 7 дней, учитываем оставшееся время
             progressPercentage = ((totalTime - timeUntilMonday) / totalTime) * 100;
         } else if (timeUntilMonday < 0) {
             // Если уже прошел понедельник, просто устанавливаем прогресс на 100%
             progressPercentage = 100;
         } else {
             // Если еще не наступил понедельник, сбрасываем прогресс
             progressPercentage = 0;
         }
       
         progressBar.style.width = `${progressPercentage}%`;
         progressText.textContent = `${progressPercentage.toFixed(2)}%`;
         // Сохраняем прогресс в localStorage
         localStorage.setItem("marathonProgress", progressPercentage.toString());
     }
 
     setInterval(updateProgress, 1000); // Обновляем прогресс каждую секунду
     updateProgress(); // Обновляем прогресс при загрузке страницы
       
     const backgr = document.querySelector("div.progress-bar-all");
     backgr.className = "progress-bar";  
    //////////////////////////////////////////////////
     });
         goCorse();
         break;
     case 'allOpen':
         allOpen();
         break;
     default:
         notOpen();
 }
   
 function goCorse() {
     
     var Checkbox = document.getElementById("Checkbox");
      Checkbox.checked = true; // Устанавливаем флажок (включаем)
    
    if(localStorage.getItem("checkboxState") === null) {
     localStorage.setItem("checkboxState", Checkbox.checked);
    }
      // Проверяем, есть ли значение в localStorage
      var savedValue = localStorage.getItem("checkboxState");
      // Если значение есть в localStorage, устанавливаем состояние чекбокса в соответствии с ним
      if (savedValue === "true") {
        Checkbox.checked = true;
      } else {
        Checkbox.checked = false;
      }
      // Добавляем обработчик события изменения состояния чекбокса
      Checkbox.addEventListener("change", function () {
        // Сохраняем текущее состояние чекбокса в localStorage
        localStorage.setItem("checkboxState", Checkbox.checked);
      });
      if (Checkbox.checked) {
 
       let popupShown;
        
         if (now.getDay() === 1) { 
          if (ifHoursAfter) {
                 popupShown = 'WindowMonday';
             }
         } 
         else if (now.getDay() === 2) {
             if (ifHoursBefore) {
                 popupShown = 'WindowMonday';
             } else if (ifHoursAfter) {
                 popupShown = 'WindowTuesday';
             }
         }
         else if (now.getDay() === 3) {
             if (ifHoursBefore) {
                 popupShown = 'WindowTuesday';
             } else if (ifHoursAfter) {
                 popupShown = 'WindowWensday';
             }
         }
         else if (now.getDay() === 4) {
             if (ifHoursBefore) {
                 popupShown = 'WindowWensday';
             } else if (ifHoursAfter) {
                 popupShown = 'WindowThirsday';
             }
         } 
         else if (now.getDay() === 5) {
             if (ifHoursBefore) {
                 popupShown = 'WindowThirsday';
             } else if (ifHoursAfter) {
                 popupShown = 'WindowFriyday';
             }
         }
         else if (now.getDay() === 6) {
             if (ifHoursBefore) {
                 popupShown = 'WindowFriyday';
             } else if (ifHoursAfter) {
                 popupShown = 'WindowSeterday';
             }
         }  
         else if (now.getDay() === 0) {
             if (ifHoursBefore) {
                 popupShown = 'WindowSeterday';
             } else if (ifHoursAfter) {
                 popupShown = 'WindowSunday';
             }
        }   
 
        if (localStorage.getItem('popupShown') !== popupShown) {
                 document.addEventListener("DOMContentLoaded", function () {
             const popupContainer = document.getElementById("popup-container");
             const popupClose = document.getElementById("popup-close");
 
             setTimeout(function () {
                 popupContainer.classList.remove("hidden");
             }, 5000);
 
             popupClose.addEventListener("click", function () {
                 popupContainer.classList.add("hidden");
             });
          });
         }  
       localStorage.setItem('popupShown', popupShown);
     }
  
  if (now.getDay() == 1) { 
    if (ifHoursAfter) {
      monDay();
      localStorage.setItem('startMarafon', 'goMarafon'); 
     }
  } 
  else if (now.getDay() == 2) {
    if (ifHoursBefore) {
    monDay();
    } else if (ifHoursAfter) {
    tuesDay(); 
    }
  }
  else if (now.getDay() == 3) {
   if (ifHoursBefore) {
    tuesDay();
    } else if (ifHoursAfter) {
    wensDay();
    }
  }
 else if (now.getDay() == 4) {
   if (ifHoursBefore) {
    wensDay();
    } else if (ifHoursAfter) {
    thirDay();
    }
  } 
 else if (now.getDay() == 5) {
   if (ifHoursBefore) {
    thirDay();
    } else if (ifHoursAfter) {
    friDay();
    }
  }
 else if (now.getDay() == 6) {
   if (ifHoursBefore) {
    friDay();
    } else if (ifHoursAfter) {
    seterDay();
    }
  }  
 else if (now.getDay() == 0) {
   if (ifHoursBefore) {
    seterDay();
    } else if (ifHoursAfter) {
    sunDay();
    }
  }  
 }   
   
 function monDay() {
   document.getElementsByClassName('calendar-day-1')[0].style.backgroundColor = '#32CD32';
   document.getElementsByClassName('calendar-day-2')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-3')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-4')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-5')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-6')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-7')[0].style.backgroundColor = 'grey';
   
  document.getElementsByClassName('textWindow')[0].textContent = 'Найскладніша частина розробки це почати. Зробіть перший крок, і у вас вже буде моментум.';
   
   document.getElementById("demo").innerHTML = "Біжимо перший день";
     const mondayColorButton = document.querySelector("span.front-white-1");
     mondayColorButton.className = "front-1";  
   
     const tuesdayColorButton = document.querySelector("span.front-white-2");
     tuesdayColorButton.className = "front-no-2";
     
     const wensdayColorButton = document.querySelector("span.front-white-3");
     wensdayColorButton.className = "front-no-3";
     
     const thirdayColorButton = document.querySelector("span.front-white-4");
     thirdayColorButton.className = "front-no-4";
     
     const fridayColorButton = document.querySelector("span.front-white-5");
     fridayColorButton.className = "front-no-5";
     
     const seterdayColorButton = document.querySelector("span.front-white-6");
     seterdayColorButton.className = "front-no-6";
     
     const sundayColorButton = document.querySelector("span.front-white-7");
     sundayColorButton.className = "front-no-7";
     
     const sundayColorDay = document.querySelector("span.blue-number-day-7");
 sundayColorDay.className = "grey-number-day-7";
     
     const seterdayColorDay = document.querySelector("span.blue-number-day-6");
 seterdayColorDay.className = "grey-number-day-6";
     
     const fridayColorDay = document.querySelector("span.blue-number-day-5");
 fridayColorDay.className = "grey-number-day-5";
     
     const thirdayColorDay = document.querySelector("span.blue-number-day-4");
 thirdayColorDay.className = "grey-number-day-4";
     
     const wensdayColorDay = document.querySelector("span.blue-number-day-3");
 wensdayColorDay.className = "grey-number-day-3";
     
     const tuesdayColorDay = document.querySelector("span.blue-number-day-2");
 tuesdayColorDay.className = "grey-number-day-2";
   
     const mondayColorDay = document.querySelector("span.blue-number-day-1");
 mondayColorDay.className = "green-number-day-1";
   
     document.getElementsByClassName('front-1')[0].textContent = newOpenDetailsButonText;
     document.getElementsByClassName('front-no-2')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-3')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-4')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-5')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-6')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-7')[0].textContent = notOpenButonText;
   
   const sundayColorDayText = document.querySelector("span.orange-text-day-7");
 // установка нового класса
 sundayColorDayText.className = "green-text-day-7";
     
     const seterColorDayText = document.querySelector("span.orange-text-day-6");
 seterColorDayText.className = "green-text-day-6";
     
     const friyColorDayText = document.querySelector("span.orange-text-day-5");
 friyColorDayText.className = "green-text-day-5";
     
     const thirdayColorDayText = document.querySelector("span.orange-text-day-4");
 thirdayColorDayText.className = "green-text-day-4";
     
     const wensColorDayText = document.querySelector("span.orange-text-day-3");
 wensColorDayText.className = "green-text-day-3";
     
     const tuesColorDayText = document.querySelector("span.orange-text-day-2");
 tuesColorDayText.className = "green-text-day-2";
   
   const monColorDayText = document.querySelector("span.orange-text-day-1");
 monColorDayText.className = "blue-text-day-1";
   
     document.getElementsByClassName('kalendar-day-1')[0].textContent = '🔔 ';
   
     document.getElementsByClassName('blue-text-day-1')[0].textContent = todayOpenDayText;
   
     document.getElementsByClassName('green-text-day-2')[0].textContent = marafonNextTuesday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('green-text-day-3')[0].textContent = marafonNextWensday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-4')[0].textContent = marafonNextThirsday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-5')[0].textContent = marafonNextFriyday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-6')[0].textContent = marafonNextSeterday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('green-text-day-7')[0].textContent = marafonNextSunday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('kalendar-day-2')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-3')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-4')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-5')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-6')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-7')[0].textContent = '🔒 ';
     const mondayClick  = document.querySelector("a.disabled-1");
     mondayClick .classList.remove("disabled-1");
   
 }
   
   function tuesDay() {
     document.getElementsByClassName('calendar-day-2')[0].style.backgroundColor = '#32CD32';
     document.getElementsByClassName('calendar-day-3')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-4')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-5')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-6')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-7')[0].style.backgroundColor = 'grey';
     
   document.getElementsByClassName('textWindow')[0].textContent = 'Навчальний процес не завжди легкий, але кожен баг і помилка це шанс навчитися чогось нового.';
     document.getElementById("demo").innerHTML = "Біжимо другий день";
     const tuesdayColorButton = document.querySelector("span.front-white-2");
     tuesdayColorButton.className = "front-2";
     
     const wensdayColorButton = document.querySelector("span.front-white-3");
     wensdayColorButton.className = "front-no-3";
     
     const thirdayColorButton = document.querySelector("span.front-white-4");
     thirdayColorButton.className = "front-no-4";
     
     const fridayColorButton = document.querySelector("span.front-white-5");
     fridayColorButton.className = "front-no-5";
     
     const seterdayColorButton = document.querySelector("span.front-white-6");
     seterdayColorButton.className = "front-no-6";
     
     const sundayColorButton = document.querySelector("span.front-white-7");
     sundayColorButton.className = "front-no-7";
     
     const sundayColorDay = document.querySelector("span.blue-number-day-7");
 sundayColorDay.className = "grey-number-day-7";
     
     const seterdayColorDay = document.querySelector("span.blue-number-day-6");
 seterdayColorDay.className = "grey-number-day-6";
     
     const fridayColorDay = document.querySelector("span.blue-number-day-5");
 fridayColorDay.className = "grey-number-day-5";
     
     const thirdayColorDay = document.querySelector("span.blue-number-day-4");
 thirdayColorDay.className = "grey-number-day-4";
     
     const wensdayColorDay = document.querySelector("span.blue-number-day-3");
 wensdayColorDay.className = "grey-number-day-3";
     
     const tuesdayColorDay = document.querySelector("span.blue-number-day-2");
 tuesdayColorDay.className = "green-number-day-2";
     
     document.getElementsByClassName('front-2')[0].textContent = newOpenDetailsButonText;
     document.getElementsByClassName('front-no-3')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-4')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-5')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-6')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-7')[0].textContent = notOpenButonText;
   
   const sundayColorDayText = document.querySelector("span.orange-text-day-7");
 // установка нового класса
 sundayColorDayText.className = "green-text-day-7";
     
     const seterColorDayText = document.querySelector("span.orange-text-day-6");
 seterColorDayText.className = "green-text-day-6";
     
     const friyColorDayText = document.querySelector("span.orange-text-day-5");
 friyColorDayText.className = "green-text-day-5";
     
     const thirdayColorDayText = document.querySelector("span.orange-text-day-4");
 thirdayColorDayText.className = "green-text-day-4";
     
     const wensColorDayText = document.querySelector("span.orange-text-day-3");
 wensColorDayText.className = "green-text-day-3";
     
     const tuesColorDayText = document.querySelector("span.orange-text-day-2");
 tuesColorDayText.className = "blue-text-day-2";
     
     document.getElementsByClassName('kalendar-day-2')[0].textContent = '🔔 ';
     
     document.getElementsByClassName('blue-text-day-2')[0].textContent = todayOpenDayText;
     
     document.getElementsByClassName('green-text-day-3')[0].textContent = marafonNextWensday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-4')[0].textContent = marafonNextThirsday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-5')[0].textContent = marafonNextFriyday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-6')[0].textContent = marafonNextSeterday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('green-text-day-7')[0].textContent = marafonNextSunday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('kalendar-day-3')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-4')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-5')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-6')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-7')[0].textContent = '🔒 ';
     const mondayClick  = document.querySelector("a.disabled-1");
     mondayClick .classList.remove("disabled-1");
     
     const tuesdayClick  = document.querySelector("a.disabled-2");
     tuesdayClick .classList.remove("disabled-2");
     
 }
   
   function wensDay() {
     document.getElementsByClassName('calendar-day-3')[0].style.backgroundColor = '#32CD32';
     document.getElementsByClassName('calendar-day-4')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-5')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-6')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-7')[0].style.backgroundColor = 'grey';
     
   document.getElementsByClassName('textWindow')[0].textContent = 'Ваш сайт це ваша історія. Давайте зробимо її незабутньою.';
     document.getElementById("demo").innerHTML = "Біжимо третій день";
     const wensdayColorButton = document.querySelector("span.front-white-3");
     wensdayColorButton.className = "front-3";
     
     const thirdayColorButton = document.querySelector("span.front-white-4");
     thirdayColorButton.className = "front-no-4";
     
     const fridayColorButton = document.querySelector("span.front-white-5");
     fridayColorButton.className = "front-no-5";
     
     const seterdayColorButton = document.querySelector("span.front-white-6");
     seterdayColorButton.className = "front-no-6";
     
     const sundayColorButton = document.querySelector("span.front-white-7");
     sundayColorButton.className = "front-no-7";
     
     const sundayColorDay = document.querySelector("span.blue-number-day-7");
 sundayColorDay.className = "grey-number-day-7";
     
     const seterdayColorDay = document.querySelector("span.blue-number-day-6");
 seterdayColorDay.className = "grey-number-day-6";
     
     const fridayColorDay = document.querySelector("span.blue-number-day-5");
 fridayColorDay.className = "grey-number-day-5";
     
     const thirdayColorDay = document.querySelector("span.blue-number-day-4");
 thirdayColorDay.className = "grey-number-day-4";
     
     const wensdayColorDay = document.querySelector("span.blue-number-day-3");
 wensdayColorDay.className = "green-number-day-3";
     
     document.getElementsByClassName('front-3')[0].textContent = newOpenDetailsButonText;
     document.getElementsByClassName('front-no-4')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-5')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-6')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-7')[0].textContent = notOpenButonText;
   
   const sundayColorDayText = document.querySelector("span.orange-text-day-7");
 // установка нового класса
 sundayColorDayText.className = "green-text-day-7";
     
     const seterColorDayText = document.querySelector("span.orange-text-day-6");
 seterColorDayText.className = "green-text-day-6";
     
     const friyColorDayText = document.querySelector("span.orange-text-day-5");
 friyColorDayText.className = "green-text-day-5";
     
     const thirdayColorDayText = document.querySelector("span.orange-text-day-4");
 thirdayColorDayText.className = "green-text-day-4";
     
     const wensColorDayText = document.querySelector("span.orange-text-day-3");
 wensColorDayText.className = "blue-text-day-3";
     document.getElementsByClassName('kalendar-day-3')[0].textContent = '🔔 ';
     document.getElementsByClassName('blue-text-day-3')[0].textContent = todayOpenDayText;
     document.getElementsByClassName('green-text-day-4')[0].textContent = marafonNextThirsday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-5')[0].textContent = marafonNextFriyday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-6')[0].textContent = marafonNextSeterday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('green-text-day-7')[0].textContent = marafonNextSunday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('kalendar-day-4')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-5')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-6')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-7')[0].textContent = '🔒 ';
     
     const mondayClick  = document.querySelector("a.disabled-1");
     mondayClick .classList.remove("disabled-1");
     
     const tuesdayClick  = document.querySelector("a.disabled-2");
     tuesdayClick .classList.remove("disabled-2");
     
     const wensdayClick  = document.querySelector("a.disabled-3");
     wensdayClick .classList.remove("disabled-3");
     
 }
   
   function thirDay() {
     document.getElementsByClassName('calendar-day-4')[0].style.backgroundColor = '#32CD32';
       document.getElementsByClassName('calendar-day-5')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-6')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-7')[0].style.backgroundColor = 'grey';
     
   document.getElementsByClassName('textWindow')[0].textContent = 'Не бійтеся експериментувати. Інновації народжуються зі сміливих ідей.';
     document.getElementById("demo").innerHTML = "Біжимо четвертий день";
     const thirdayColorButton = document.querySelector("span.front-white-4");
     thirdayColorButton.className = "front-4";
     
     const fridayColorButton = document.querySelector("span.front-white-5");
     fridayColorButton.className = "front-no-5";
     
     const seterdayColorButton = document.querySelector("span.front-white-6");
     seterdayColorButton.className = "front-no-6";
     
     const sundayColorButton = document.querySelector("span.front-white-7");
     sundayColorButton.className = "front-no-7";
     
     const sundayColorDay = document.querySelector("span.blue-number-day-7");
 sundayColorDay.className = "grey-number-day-7";
     
     const seterdayColorDay = document.querySelector("span.blue-number-day-6");
 seterdayColorDay.className = "grey-number-day-6";
     
     const fridayColorDay = document.querySelector("span.blue-number-day-5");
 fridayColorDay.className = "grey-number-day-5";
     
     const thirdayColorDay = document.querySelector("span.blue-number-day-4");
 thirdayColorDay.className = "green-number-day-4";
     
     document.getElementsByClassName('front-4')[0].textContent = newOpenDetailsButonText;
     document.getElementsByClassName('front-no-5')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-6')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-7')[0].textContent = notOpenButonText;
   
   const sundayColorDayText = document.querySelector("span.orange-text-day-7");
 // установка нового класса
 sundayColorDayText.className = "green-text-day-7";
     
     const seterColorDayText = document.querySelector("span.orange-text-day-6");
 seterColorDayText.className = "green-text-day-6";
     
     const friyColorDayText = document.querySelector("span.orange-text-day-5");
 friyColorDayText.className = "green-text-day-5";
     
     const thirdayColorDayText = document.querySelector("span.orange-text-day-4");
 thirdayColorDayText.className = "blue-text-day-4";
     document.getElementsByClassName('kalendar-day-4')[0].textContent = '🔔 ';
     document.getElementsByClassName('blue-text-day-4')[0].textContent = todayOpenDayText;
     document.getElementsByClassName('green-text-day-5')[0].textContent = marafonNextFriyday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-6')[0].textContent = marafonNextSeterday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('green-text-day-7')[0].textContent = marafonNextSunday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('kalendar-day-5')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-6')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-7')[0].textContent = '🔒 ';
     const mondayClick  = document.querySelector("a.disabled-1");
     mondayClick .classList.remove("disabled-1");
     
     const tuesdayClick  = document.querySelector("a.disabled-2");
     tuesdayClick .classList.remove("disabled-2");
     
     const wensdayClick  = document.querySelector("a.disabled-3");
     wensdayClick .classList.remove("disabled-3");
     
     const thirdayClick  = document.querySelector("a.disabled-4");
     thirdayClick .classList.remove("disabled-4");
     
 }
   
   function friDay() {
     document.getElementsByClassName('calendar-day-5')[0].style.backgroundColor = '#32CD32';
     document.getElementsByClassName('calendar-day-6')[0].style.backgroundColor = 'grey';
   document.getElementsByClassName('calendar-day-7')[0].style.backgroundColor = 'grey';
     
    document.getElementsByClassName('textWindow')[0].textContent = 'Веб-розробка це мистецтво перетворювати ідеї на інтерактивні реальності.';
    document.getElementById("demo").innerHTML = "Біжимо п'ятий день";
     const fridayColorButton = document.querySelector("span.front-white-5");
     fridayColorButton.className = "front-5";
     
     const seterdayColorButton = document.querySelector("span.front-white-6");
     seterdayColorButton.className = "front-no-6";
     
     const sundayColorButton = document.querySelector("span.front-white-7");
     sundayColorButton.className = "front-no-7";
     
     const sundayColorDay = document.querySelector("span.blue-number-day-7");
 sundayColorDay.className = "grey-number-day-7";
     
     const seterdayColorDay = document.querySelector("span.blue-number-day-6");
 seterdayColorDay.className = "grey-number-day-6";
     
     const fridayColorDay = document.querySelector("span.blue-number-day-5");
 fridayColorDay.className = "green-number-day-5";
     
     document.getElementsByClassName('front-5')[0].textContent = newOpenDetailsButonText;
     document.getElementsByClassName('front-no-6')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-7')[0].textContent = notOpenButonText;
   
   const sundayColorDayText = document.querySelector("span.orange-text-day-7");
 // установка нового класса
 sundayColorDayText.className = "green-text-day-7";
     
     const seterColorDayText = document.querySelector("span.orange-text-day-6");
 seterColorDayText.className = "green-text-day-6";
     
     const friyColorDayText = document.querySelector("span.orange-text-day-5");
 friyColorDayText.className = "blue-text-day-5";
     document.getElementsByClassName('kalendar-day-5')[0].textContent = '🔔 ';
     document.getElementsByClassName('blue-text-day-5')[0].textContent = todayOpenDayText;
     document.getElementsByClassName('green-text-day-6')[0].textContent = marafonNextSeterday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('green-text-day-7')[0].textContent = marafonNextSunday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('kalendar-day-6')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-7')[0].textContent = '🔒 ';
     
     const mondayClick  = document.querySelector("a.disabled-1");
     mondayClick .classList.remove("disabled-1");
     
     const tuesdayClick  = document.querySelector("a.disabled-2");
     tuesdayClick .classList.remove("disabled-2");
     
     const wensdayClick  = document.querySelector("a.disabled-3");
     wensdayClick .classList.remove("disabled-3");
     
     const thirdayClick  = document.querySelector("a.disabled-4");
     thirdayClick .classList.remove("disabled-4");
     
     const friydayClick  = document.querySelector("a.disabled-5");
     friydayClick .classList.remove("disabled-5");
     
 }
   
   function seterDay() {
     document.getElementsByClassName('calendar-day-6')[0].style.backgroundColor = '#32CD32';
     document.getElementsByClassName('calendar-day-7')[0].style.backgroundColor = 'grey';
     
     document.getElementsByClassName('textWindow')[0].textContent = 'Сайти створюються не для себе, а для людей. Думайте про те, як зробити інтернет кращим для всіх.';
     document.getElementById("demo").innerHTML = "Біжимо шостий день";
     const seterdayColorButton = document.querySelector("span.front-white-6");
     seterdayColorButton.className = "front-6";
     
     const sundayColorButton = document.querySelector("span.front-white-7");
     sundayColorButton.className = "front-no-7";
     
     const sundayColorDay = document.querySelector("span.blue-number-day-7");
 sundayColorDay.className = "grey-number-day-7";
     
     const seterdayColorDay = document.querySelector("span.blue-number-day-6");
 seterdayColorDay.className = "green-number-day-6";
     
     document.getElementsByClassName('front-6')[0].textContent = newOpenDetailsButonText;
     document.getElementsByClassName('front-no-7')[0].textContent = notOpenButonText;
   
   const sundayColorDayText = document.querySelector("span.orange-text-day-7");
 // установка нового класса
 sundayColorDayText.className = "green-text-day-7";
     
     const seterColorDayText = document.querySelector("span.orange-text-day-6");
 seterColorDayText.className = "blue-text-day-6";
     document.getElementsByClassName('kalendar-day-6')[0].textContent = '🔔 ';
     document.getElementsByClassName('blue-text-day-6')[0].textContent = todayOpenDayText;
     document.getElementsByClassName('green-text-day-7')[0].textContent = marafonNextSunday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('kalendar-day-7')[0].textContent = '🔒 ';
     
     const mondayClick  = document.querySelector("a.disabled-1");
     mondayClick .classList.remove("disabled-1");
     
     const tuesdayClick  = document.querySelector("a.disabled-2");
     tuesdayClick .classList.remove("disabled-2");
     
     const wensdayClick  = document.querySelector("a.disabled-3");
     wensdayClick .classList.remove("disabled-3");
     
     const thirdayClick  = document.querySelector("a.disabled-4");
     thirdayClick .classList.remove("disabled-4");
     
     const friydayClick  = document.querySelector("a.disabled-5");
     friydayClick .classList.remove("disabled-5");
     
     const seterdayClick  = document.querySelector("a.disabled-6");
     seterdayClick .classList.remove("disabled-6");
 }
   
   function sunDay() {
     document.getElementsByClassName('calendar-day-7')[0].style.backgroundColor = '#32CD32';
     
     document.getElementsByClassName('textWindow')[0].textContent = 'Ваші помилки це кроки на шляху до досконалості. Не бійтеся їх робити та отримувати уроки.';
     document.getElementById("demo").innerHTML = "Сьогодня останній день";
     const sundayColorButton = document.querySelector("span.front-white-7");
     sundayColorButton.className = "front-7";
     
     const sundayColorDay = document.querySelector("span.blue-number-day-7");
 sundayColorDay.className = "green-number-day-7";
     
     document.getElementsByClassName('front-7')[0].textContent = newOpenDetailsButonText;
   
   const sundayColorDayText = document.querySelector("span.orange-text-day-7");
 // установка нового класса
 sundayColorDayText.className = "blue-text-day-7";
     document.getElementsByClassName('kalendar-day-7')[0].textContent = '🔔 ';
     document.getElementsByClassName('blue-text-day-7')[0].textContent = todayOpenDayText;
     
     const mondayClick  = document.querySelector("a.disabled-1");
     mondayClick .classList.remove("disabled-1");
     
     const tuesdayClick  = document.querySelector("a.disabled-2");
     tuesdayClick .classList.remove("disabled-2");
     
     const wensdayClick  = document.querySelector("a.disabled-3");
     wensdayClick .classList.remove("disabled-3");
     
     const thirdayClick  = document.querySelector("a.disabled-4");
     thirdayClick .classList.remove("disabled-4");
     
     const friydayClick  = document.querySelector("a.disabled-5");
     friydayClick .classList.remove("disabled-5");
     
     const seterdayClick  = document.querySelector("a.disabled-6");
     seterdayClick .classList.remove("disabled-6");
     
     const sundayClick  = document.querySelector("a.disabled-7");
     sundayClick .classList.remove("disabled-7");
     
 }
  
   function notOpen() {
     document.getElementsByClassName('calendar')[0].style.display = 'none';
     
    document.addEventListener('DOMContentLoaded', function () {
 
   // Функция для обновления таймера
   function updateTimer() {
     const cDate = new Date();
     const currentDayOfWeek = cDate.getDay();
     const currentHours = cDate.getHours();
     const currentMinutes = cDate.getMinutes();
     const currentSeconds = cDate.getSeconds();
 
     // Находим время до следующего понедельника 19:00
     let numDay = 0;
     if (currentDayOfWeek === 1 && currentHours >= 19) {
       numDay = 1;
     }
     let daysUntilNextMonday = currentDayOfWeek === 1 ? 7 : (8 - currentDayOfWeek + numDay) % 7;
     let hoursUntilNextMonday = 18 - currentHours; // 19:00 - текущее время
     let minutesUntilNextMonday = 59 - currentMinutes;
     let secondsUntilNextMonday = 59 - currentSeconds;
 
     if (currentDayOfWeek === 1 && currentHours >= 19) {
       // Если сегодня понедельник и текущее время больше или равно 19:00,
       // то переходим к следующему понедельнику
       daysUntilNextMonday = 7;
       hoursUntilNextMonday = 18;
       minutesUntilNextMonday = 59;
       secondsUntilNextMonday = 59;
     }
 
     // Добавляем 24 часа, если часы отрицательны
     if (hoursUntilNextMonday < 0) {
       hoursUntilNextMonday += 24;
     }
 
     const $days = document.querySelector('.countdown__days');
     const $hours = document.querySelector('.countdown__hours');
     const $minutes = document.querySelector('.countdown__minutes');
     const $seconds = document.querySelector('.countdown__seconds');
 
     $days.textContent = daysUntilNextMonday < 10 ? '0' + daysUntilNextMonday : daysUntilNextMonday;
     $hours.textContent = hoursUntilNextMonday < 10 ? '0' + hoursUntilNextMonday : hoursUntilNextMonday;
     $minutes.textContent = minutesUntilNextMonday < 10 ? '0' + minutesUntilNextMonday : minutesUntilNextMonday;
     $seconds.textContent = secondsUntilNextMonday < 10 ? '0' + secondsUntilNextMonday : secondsUntilNextMonday;
   }
 
   // Вызываем функцию updateTimer для установки и запуска таймера
   updateTimer();
 
   // Запускаем таймер обновления каждую секунду
   setInterval(updateTimer, 1000);
 });
     
     document.getElementsByClassName('next-333')[0].style.display = 'none';
     const mondayColorButton = document.querySelector("span.front-white-1");
     mondayColorButton.className = "front-no-1";  
   
     const tuesdayColorButton = document.querySelector("span.front-white-2");
     tuesdayColorButton.className = "front-no-2";
     
     const wensdayColorButton = document.querySelector("span.front-white-3");
     wensdayColorButton.className = "front-no-3";
     
     const thirdayColorButton = document.querySelector("span.front-white-4");
     thirdayColorButton.className = "front-no-4";
     
     const fridayColorButton = document.querySelector("span.front-white-5");
     fridayColorButton.className = "front-no-5";
     
     const seterdayColorButton = document.querySelector("span.front-white-6");
     seterdayColorButton.className = "front-no-6";
     
     const sundayColorButton = document.querySelector("span.front-white-7");
     sundayColorButton.className = "front-no-7";
     
     const sundayColorDay = document.querySelector("span.blue-number-day-7");
 sundayColorDay.className = "grey-number-day-7";
     
     const seterdayColorDay = document.querySelector("span.blue-number-day-6");
 seterdayColorDay.className = "grey-number-day-6";
     
     const fridayColorDay = document.querySelector("span.blue-number-day-5");
 fridayColorDay.className = "grey-number-day-5";
     
     const thirdayColorDay = document.querySelector("span.blue-number-day-4");
 thirdayColorDay.className = "grey-number-day-4";
     
     const wensdayColorDay = document.querySelector("span.blue-number-day-3");
 wensdayColorDay.className = "grey-number-day-3";
     
     const tuesdayColorDay = document.querySelector("span.blue-number-day-2");
 tuesdayColorDay.className = "grey-number-day-2";
   
     const mondayColorDay = document.querySelector("span.blue-number-day-1");
 mondayColorDay.className = "grey-number-day-1";
   
     document.getElementsByClassName('front-no-1')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-2')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-3')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-4')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-5')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-6')[0].textContent = notOpenButonText;
     document.getElementsByClassName('front-no-7')[0].textContent = notOpenButonText;
   
   const sundayColorDayText = document.querySelector("span.orange-text-day-7");
 // установка нового класса
 sundayColorDayText.className = "green-text-day-7";
     
     const seterColorDayText = document.querySelector("span.orange-text-day-6");
 seterColorDayText.className = "green-text-day-6";
     
     const friyColorDayText = document.querySelector("span.orange-text-day-5");
 friyColorDayText.className = "green-text-day-5";
     
     const thirdayColorDayText = document.querySelector("span.orange-text-day-4");
 thirdayColorDayText.className = "green-text-day-4";
     
     const wensColorDayText = document.querySelector("span.orange-text-day-3");
 wensColorDayText.className = "green-text-day-3";
     
     const tuesColorDayText = document.querySelector("span.orange-text-day-2");
 tuesColorDayText.className = "green-text-day-2";
   
   const monColorDayText = document.querySelector("span.orange-text-day-1");
 monColorDayText.className = "green-text-day-1";
     
     // Выводим дату ближайшего будущего понедельника
     document.getElementById("demo").innerHTML = "Стартуємо: " + formattedNextMonday + " о " + openNewLesson + ".00"; 
     
     document.getElementsByClassName('green-text-day-1')[0].textContent = '🔑 ' + formattedNextMonday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('green-text-day-2')[0].textContent = formattedNextTuesday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('green-text-day-3')[0].textContent = formattedNextWensday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-4')[0].textContent = formattedNextThirsday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-5')[0].textContent = formattedNextFriyday + ' о ' + openNewLesson + '.00'; 
     document.getElementsByClassName('green-text-day-6')[0].textContent = formattedNextSeterday + ' о ' + openNewLesson + '.00';
     document.getElementsByClassName('green-text-day-7')[0].textContent = formattedNextSunday + ' о ' + openNewLesson + '.00';
    
     document.getElementsByClassName('kalendar-day-1')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-2')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-3')[0].textContent = '🔒 '; 
     document.getElementsByClassName('kalendar-day-4')[0].textContent = '🔒 '; 
     document.getElementsByClassName('kalendar-day-5')[0].textContent = '🔒 '; 
     document.getElementsByClassName('kalendar-day-6')[0].textContent = '🔒 ';
     document.getElementsByClassName('kalendar-day-7')[0].textContent = '🔒 ';
     
     
     const timerShow1  = document.querySelector("span.timer-no-1");
     timerShow1.className = "timer-no-1";
     document.getElementsByClassName('timer-no-1')[0].textContent = ' Стартуємо через:';
     const timerShow  = document.querySelector("span.timer-no-2");
     timerShow.classList.remove("timer-no-2");
     
     const progressbarShow  = document.querySelector("span.progress-show");
     progressbarShow.remove("progress-show");
     
     const textShow = document.querySelector("span.timer-no-1");
     textShow.className = "textshow-1";
     
     document.getElementsByClassName('textWindow')[0].textContent = 'Дорогою до мети важливо не зупинятися, навіть якщо відбуваються непередбачені ситуації.';
 }
 
   function allOpen() {
     document.getElementsByClassName('next-333')[0].style.display = 'none';
     const mondayClick  = document.querySelector("a.disabled-1");
     mondayClick .classList.remove("disabled-1");
     
     const tuesdayClick  = document.querySelector("a.disabled-2");
     tuesdayClick .classList.remove("disabled-2");
     
     const wensdayClick  = document.querySelector("a.disabled-3");
     wensdayClick .classList.remove("disabled-3");
     
     const thirdayClick  = document.querySelector("a.disabled-4");
     thirdayClick .classList.remove("disabled-4");
     
     const friydayClick  = document.querySelector("a.disabled-5");
     friydayClick .classList.remove("disabled-5");
     
     const seterdayClick  = document.querySelector("a.disabled-6");
     seterdayClick .classList.remove("disabled-6");
     
     const sundayClick  = document.querySelector("a.disabled-7");
     sundayClick .classList.remove("disabled-7");
     
     const progressBar = document.querySelector("span.progress");
     progressBar.style.borderRight = "none";
 }