function askAI(){
  let q = document.getElementById("question").value.toLowerCase();
  let answer = "";

  if(q.includes("طلاق") || q.includes("نفقة")){
    answer = "⚖️ قضية أحوال شخصية - يفضل استشارة محامي.";
  }
  else if(q.includes("إيجار") || q.includes("عقد")){
    answer = "🏠 قضية مدنية - راجع العقد أولاً.";
  }
  else if(q.includes("سرقة") || q.includes("نصب")){
    answer = "🚨 قضية جنائية - يجب التوجه لمحامي فوراً.";
  }
  else if(q.trim().length < 10){
    answer = "من فضلك اكتب تفاصيل أكثر.";
  }
  else{
    answer = "⚖️ تحتاج استشارة قانونية متخصصة.";
  }

  document.getElementById("answer").innerText = answer;
}
