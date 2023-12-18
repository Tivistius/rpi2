function idSearch(id,data){
    for (var i of data){
        if (i["id"]==id){
            return i;
        }
    }
}
function Search(str,data) {
    var res=[];
    var j=0;
    for (var i of data){
        if (i["fio"].toLowerCase().includes(str.toLowerCase()) || i["attribute"].toLowerCase().includes(str.toLowerCase())){
            res[j]=i;
            j++;
        }
    };
    return res;
}

export default idSearch;