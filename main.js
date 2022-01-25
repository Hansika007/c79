stud_array=[];
function submit()
{
    var name1=document.getElementById(student_1).value;
    var name2=document.getElementById(student_2).value;
    var name3=document.getElementById(student_3).value;
    var name4=document.getElementById(student_4).value;

    stud_array.push(name1);
    stud_array.push(name2);
    stud_array.push(name3);
    stud_array.push(name4);

    document.getElementById("display_name").innerHTML=stud_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    stud_array.sort();
    document.getElementById("display_name").innerHTML=stud_array;
}