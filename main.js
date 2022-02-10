function submit()
{
    var display_student_array = [];

    for (var j = 1; j <= 4; j++)
    {
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
    } 

    console.log(name_of_the_student_array);

    var length_of_name_of_students_array = name_of_the_student_array.length;
    console.log(length_of_name_of_students_array);

    for (var k = 0; k < length_of_name_of_students_array; k++)
    {
        display_student_array.push("<h4>NAME - "+ name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array);
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_student_array_sorting = [];

    var length_of_name_of_students_array = name_of_the_student_array.length;
    console.log(length_of_name_of_students_array);

    for (var k = 0; k < length_of_name_of_students_array; k++)
    {
     display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
     console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}
var Name_Of_The_Guest_Array = [];
function Submit() {
   var Guest_name = document.getElementById("Enter_name").value;
   Name_Of_The_Guest_Array.push(Guest_name);
   document.getElementById("Display_names").innerHTML = Name_Of_The_Guest_Array;
   console.log(Name_Of_The_Guest_Array);
   var length_of_the_array = Name_Of_The_Guest_Array.length;
    console.log(length_of_the_array);
}
function Show_list() {
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("Show_names").innerHTML = i.toString();
}
function sorting() {
    Name_Of_The_Guest_Array.sort();
    var i = Name_Of_The_Guest_Array.join("<br>");
    console.log(Name_Of_The_Guest_Array);
    document.getElementById("Sorted_names").innerHTML = i.toString();
}
function Search() {
    var s = document.getElementById("Search_name").value;
    var found = 0;
    var j;
    for(j=0; j<Name_Of_The_Guest_Array.length; j++) {
        if(s==Name_Of_The_Guest_Array[j]) {
            found = found+1;
        }
    }
    document.getElementById("Search_names").innerHTML = "Name Found "+found+" Time/s";
    console.log("Found Name "+found+" Time/s");
}