function skillMember() {
    var member = document.getElementById("member");
    var memberValue = member.value;
    var memberText = member.options[member.selectedIndex].text;
    var memberText = memberText.split(" ");
    var memberText = memberText[0];
    var memberText = memberText.replace(/[^0-9]/g, "");
    var memberText = parseInt(memberText);
    var memberText = memberText * 10000;
    var memberText = memberText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var memberText = memberText + "원";
    var memberText = memberText.replace("NaN", "0원");
    document.getElementById("memberText").innerHTML = memberText;
}