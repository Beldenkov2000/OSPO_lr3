function Min()
{
    d=document;
    var x = Number(d.form1.X.value) ;
    var y = Number(d.form1.Y.value) ;
    var x1 = Math.min(x,y) ;
    d.form1.x1.value=x1;
}