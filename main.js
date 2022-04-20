name_std_array=[];
function submit(){
    var dis_std_array=[];

    for(var j=1; j<=4;j++){

        var name_student= document.getElementById("name_of_the_student_"+j).value;

        console.log(name_student);

        name_std_array.push(name_student);
    }

    console.log(name_std_array);

    var length_std_array= name_std_array.length;

    console.log(length_std_array);

    for(var k=0; k<length_std_array; k++){
        dis_std_array.push("<h4>Name - "+name_std_array[k]+"</h4>");
        console.log(dis_std_array);

    }

    console.log(dis_std_array);
    document.getElementById("display_name_with_commas").innerHTML=dis_std_array;

    var remove_commas=dis_std_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";



}

function sorting(){
    name_std_array.sort();
    var dis_std_sort=[] 
    var length_std_array= name_std_array.length;
    for(var k=0; k<length_std_array; k++){
        dis_std_sort.push("<h4>Name - "+name_std_array[k]+"</h4>");
        console.log(dis_std_sort);}
        var remove_commas=dis_std_sort.join(" ");
        console.log(remove_commas);

        document.getElementById("display_name_without_commas").innerHTML=remove_commas;



    
}




    






