function StudentList (){
    this.List = [];
    this.addStudent = function (addS){
        this.List.push(addS);
    }

    this.deleteStudent = function (deleteList){
        for(var i=0;i< deleteList.length ;i++)
        {
            for(var j=0; j < this.List.length ; j++ )
            {
                var student = this.List[j];
                if(deleteList[i] == student.ID)
                {
                    this.List.splice(j,1);
                }
            }
        }
    }

    this.editStudent = function (sUpda){
        for(var i=0;i<this.List.length;i++)
        {
            var sUpdate = this.List[i];
            if(sUpda.ID == sUpdate.ID)
            {
                sUpdate.Name = sUpda.Name;
                sUpdate.Class = sUpda.Class;
                sUpdate.JsScore = sUpda.JsScore;
                sUpdate.AndroidScore = sUpda.AndroidScore;
            }

        }
    }
}