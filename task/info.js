function f1()
{

	var name1=document.getElementById('name').value;
	if(name1=="" || name1.length<2 )
	{
		document.getElementById('name').value="incorrect";
	}
	else
	{
		name1=document.getElementById('name').value;
		alert(name1);
	}
   
}
function f2()
{
	var email1=document.getElementById('email').value;
	if(email1=="")
	{
		alert("incorrect");
	}
    else if(email1.includes("@example.com"))
	{
		email1=document.getElementById('email').value;
		alert(email1);
	}
	else{
		alert("invalid");
	}
}
function f3()
{
	
    if(document.getElementById('male').checked==true)
	{
		alert("Male");
	}
	if(document.getElementById('female').checked==true){
		alert("Female");
	}
   if(document.getElementById('other').checked==true){
		alert("Other");
	}
	else
	{
		alert("You have to choose one");
	}
}
function f4()
{
	
}
function f5()
{
	var userid1=document.getElementById('userid').value;
	if(userid1=="" || userid1<0)
	{
		alert("invalid UserId");
	}
	else
	{
		alert(userid1);
	}
}