function showform(){
        let form = document.getElementById('form');
        let button = document.getElementById('continuebutton');  // Get the button
        let buttonText = button.querySelector('p');  // Get the paragraph inside button
        
        form.hidden = !form.hidden;
        
        //اذا form غير موجود
        if (form.hidden) {
            buttonText.innerHTML = '<b>متابعة</b>'; //الزر مكتوب عليه متاعبة  
        } else {
            buttonText.innerHTML = '<b>إغلاق</b>'; //اذا موجود = اغلاق
      
        }
    }

function submitOrder() {
    let selectedMeals = [];
    let totalPrice = 0;
    
    document.querySelectorAll('.checkfoodbutton:checked').forEach(checkbox => {
        const price = parseInt(checkbox.value);
        const mealName = checkbox.dataset.name;
        
        selectedMeals.push(`${mealName} (${price} ل.س)`);
        totalPrice += price;
    });
    
    if (selectedMeals.length === 0) {
        alert('⚠️ لم يتم اختيار أي وجبة');
        return;
    }
    
    const tax = totalPrice * 0.10;
    alert(`✅ ${selectedMeals.join('\n')}\n\n💰 المجموع: ${totalPrice} ل.س\n🧾 الضريبة: ${tax} ل.س\n💵 الإجمالي: ${totalPrice + tax} ل.س`);
}