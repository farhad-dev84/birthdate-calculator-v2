// گرفتن المنت های html
const birthdateInput = document.getElementById("birthdate") ;
const calculateBtn = document.getElementById("calculateBtn") ;
const resetBtn = document.getElementById("resetBtn") ;
const resultDiv = document.getElementById("result") ;

// تابع محاسبه سن
function calculateAge() {
  // تبدیل مقدار ورودی به تاریخ
  const birthdate = new Date(birthdateInput.value) ;
  // گرفتن تاریخ امروز
  const today = new Date() ;
  
  // اگر کاربر تاریخ نزده بود
  if(!birthdateInput.value) {
    resultDiv.textContent = "لطفا تاریخ خود را وارد کنید ." ;
    resultDiv.classList.replace("text-success" , "text-danger") ;
    return ;
  } 
  
  // محاسبه تفاوت بین تاریخ امروز و تولد
  const years = today.getFullYear() - birthdate.getFullYear() ;
  const months = today.getMonth() - birthdate.getMonth() ;
  const days = today.getDate() - birthdate.getDate() ;
  
  // اگر ماه یا روز منفی شد اصلاح کنیم
  if(days < 0) {
    months-- ;
    
    // تعداد روز های ماه قبل را اضافه میکنیم
    const prevMonth = new Date(today.getFullYear() , today.getMonth() , 0).getDate() ;
    days += prevMonth ;
  }
  
  if(months < 0) {
    years-- ;
    months += 12 ;
  }
  
  // نمایش نتیجه
  resultDiv.textContent = `شما ${years} سال و ${months} ماه و ${days} روزه هستید .` ;
  resultDiv.classList.replace("text-danger" , "text-success") ;
}

// تابع ریست کردن
function resetFields() {
  birthdateInput.value = "" ;
  resultDiv.textContent = "" ;
}

// وقتی دکمه ها کلیک شدند
calculateBtn.addEventListener("click" , calculateAge) ;
resetBtn.addEventListener("click" , resetFields) ;