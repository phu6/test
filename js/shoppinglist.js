// CREATE
// READ
// UPDATE
// DELETE

var app = new function() {
    // READ
    this.FetchAll = function () {
        var data = '';
        this.el = document.getElementById('products');
        if (this.tasks.length > 0) {
            // nếu mà list sản phẩm không phải rỗng thì 
            for (var i = 0; i < this.tasks.length; i++) {
                // duyệt qua list và hiển thị lên lại màn hình
                data += '<tr>';
                data += '<td>' + this.tasks[i] + '</td>';
                data += '<td><button onclick="app.Delete('+ i +')">x</button></td>';
                data +='<td><button onclick="app.Update('+i+')">E</button></td>';
                data += '<tr>';
                // i sản phẩm mà người dùng lưu vào list (tasks)
            }
        }
        console.log(data);
        return this.el.innerHTML = data;
    }

    this.tasks = [];
    // khởi động giá trị sản phẩm ban đầu là roongx^^^ (Không có sản phẩm ban đầu)
    
    // CREATE
    this.Add = function(){
        el = document.getElementById('add-sp'); //1
        var task = el.value;
        if (task) { //2
            // check điều kiện nếu có sản phẩm
            this.tasks.push(task);

            // reset value
            el.value = '';

            // hiện thị giá trị của sản phẩm đến màn hình
            this.FetchAll();

        }
    }

    // UPDATE
    this.Update = function (item) {
        var el = document.getElementById('edit-sp');
        console.log('ấn vào sửa');
        el.value = this.tasks[item];
        // lưu giá trị mới vào array
        document.getElementById('edit-box').style.display = 'block';
        update = this;
        console.log('item', item);
        console.log('el', el.value);
        document.getElementById('save_edit').onsubmit = function () {
            // khi click 
            var task = el.value;
            update.tasks.splice(item, 1, task.trim());
            update.FetchAll();
            document.getElementById('edit-box').style.display = 'none';
        }
    }

    // DELETE 
    this.Delete = function (item) {
        //function xóa 1 sản phẩm truyền lên giá trị của sản phẩm đó 
        this.tasks.splice(item, 1);
        // xóa sp hiện tại đang chọn 
        this.FetchAll();
        //hiện lại gái trị của sản phẩm đến màn hình

    }

}
app.FetchAll();