function Check()
{
    d=document
    var admin, name;
    name = "Взлом online казино успешно завершен";
    admin = name;
    alert( admin );
}
function Age(){
    do {
        var age = prompt('Сколько вам лет?','Введите ваш возраст сюда');
    } while(!confirm("Вы уверены что вам "+ age +"?"))
}

function Rename(){
    var input = document.getElementById('text').value;
    document.getElementById('secondname').innerHTML=input;
}
function Show(){
    alert( "Для получения этой информации вам необходима премиум подписка" );
}