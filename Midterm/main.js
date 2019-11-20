
//Data local
        var students = [
            {
                idS: 01,
                name: "Nam",
                classS: "20a",
                jsScore: 8,
                androidScore: 9
            },
            {
                idS: 02,
                name: "Thinh",
                classS: "20B",
                jsScore: 10,
                androidScore: 10
            }
        ]
        console.log(students);

        var studentInStringFromLocal = localStorage.getItem('studentInString');
        var studentInStringFromLocal = JSON.parse(studentInStringFromLocal);

        console.log("lay du lieu ra tu local");

    var StudentList = new StudentList();

        //document.getElementById
        function DomID(id){
            var element = document.getElementById(id);
            return element;
        }


        function addStudent(){
            //Lấy dữ liệu từ người dùng nhập vào
            var idS = DomID("idS").value;
            var nameS = DomID("nameS").value;
            var classS = DomID("classS").value;
            var jsScore = DomID("jsScore").value;
            var androidScore = DomID("androidScore").value;
            var loi = 0;
            
            //Thêm student
            var student = new Student(idS, nameS, classS, jsScore, androidScore);
            student.jsScore = DomID("jsScore").value;
            student.androidScore = DomID("androidScore").value;
            StudentList.addStudent(student);
            UpdateStudent(StudentList);
            console.log(StudentList);
        }


        function UpdateStudent (StudentList){
            var listTableS = DomID("tbodyStudent");
            listTableS.innerHTML = "";
            for(var i = 0; i <  StudentList.List.length ; i++ )
            {
                var student = StudentList.List[i];
                //Tạo thẻ tr
                var trStudent = document.createElement("tr");
                trStudent.id = student.ID;
                trStudent.className = "trStudent";
                trStudent.setAttribute("onclick","UpdateStudent('"+student.ID+"')");
                //Tạo các thẻ td và filter dữ liệu student thứ [i] vào
                var tdCheckBox = document.createElement('td');
                var ckbIdStudent = document.createElement('input');
                console.log(ckbIdStudent);
                ckbIdStudent.setAttribute("type","checkbox");
                ckbIdStudent.setAttribute("value",student.ID);
                tdCheckBox.appendChild(ckbIdStudent);

                ckbIdStudent.setAttribute("class","ckbIdStudent");
                ckbIdStudent.setAttribute("type","checkbox");
                ckbIdStudent.setAttribute("value",student.ID);
                tdCheckBox.appendChild(ckbIdStudent);

                var tdID = TaoTheTD("ID",student.ID);
                var tdName = TaoTheTD("Name",student.Name);
                var tdClass = TaoTheTD("Class",student.Class);
                var tdJsScore = TaoTheTD("jsScore",student.jsScore);
                var tdAndroidScore = TaoTheTD("androidScore",student.AndroidScore);

                //Append các td vào tr
                trStudent.appendChild(tdCheckBox);
                trStudent.appendChild(tdID);
                trStudent.appendChild(tdName);
                trStudent.appendChild(tdClass);
                trStudent.appendChild(tdJsScore);
                trStudent.appendChild(tdAndroidScore);

                //Append các tr vào tbody
                listTableS.appendChild(trStudent);
            }
        }

        function TaoTheTD (className, value){
            var td = document.createElement("td");
            td.className = className;
            td.innerHTML = value;
            return td;
        }

        //Xóa 
        function deleteStudent(){
            //Mảng checkbox
            var listIDs = document.getElementsByClassName("ckbIdStudent");
           
            var listIDsChoose = [];
            for(i = 0 ; i<listIDs.length ;i++){
                console.log(listIDs[i]);
                if(listIDs[i].checked){ //Kiểm phần tử checkbox đó có được chọn hay chưa
                    listIDsChoose.push(listIDs[i].value);
                }
            }
            StudentList.deleteStudent(listIDsChoose);
            UpdateStudent(StudentList);
        }

        function SetStorage(){
            //Chuyển đổi object mảng danh sách sinh viên thành chuỗi json
            var jsonStudentList = JSON.stringify(StudentList.List);
            //Rồi đem chuỗi json lưu vào storage và đặt tên là listStudent
            localStorage.setItem("List",jsonStudentList);
        }

        function GetStorage(){
            //Lấy ra chuỗi json là mảng StudentList thông qua tên DanhSachSV
            var jsonStudentList = localStorage.getItem("List");
            var arrayList = JSON.parse(jsonStudentList);
            StudentList.List = arrayList;
            UpdateStudent(StudentList);

        }


