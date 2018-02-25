window.onload = function() {
    var superTable = document.querySelector('#super-table');

    initSuperTable({
        element: superTable,
        data: users,
        options: {
            firstColumn: 'gender',
            rowHeight : 30,
            tableHeight: 70,
            tableWidth: 70,
            tableBackgroundColor: 'white',
            tableTextColor:'black',
            tableHoverColor: 'red',
            rowMouseOver: true,
            rowStyle: 'zebra',
            fixedHeader: true,
            fixedColumn: true
        }
    });
    function initSuperTable(table){
        var firstLine = document.createElement('div');
        firstLine.classList.add("firstLine");
        table.element.appendChild(firstLine);

        for (var i in table.data) {
            var user = table.data[i];
        }
        for (var i in user) {
            var items = document.createElement('div');
            items.classList.add(i);
            firstLine.appendChild(items);
            items.innerHTML += i;
        }
        var users = document.createElement('div');
        table.element.appendChild(users);
        users.classList.add('users');

        for (var i in table.data) {
            var allUsers = document.createElement('div');
            allUsers.classList.add("allUsers");
            users.appendChild(allUsers);

            for (var i in user){
                var itemUsers = document.createElement('div');
                itemUsers.classList.add(i);
                allUsers.appendChild(itemUsers);
                itemUsers.innerHTML = user[i];
            }
        }

        var  superTable = document.querySelector('#super-table');
        superTable.style.height= table.options.tableHeight + "vh";
        if (table.options.tableHeight > 80) {
            alert('The maximum  size of the table is 80 !');
        }
        superTable.style.width = table.options.tableWidth + "vw";
        if (table.options.tableWidth > 85) {
            alert('The maximum  width of the table is 85 !');
        }

        superTable.style.backgroundColor = table.options.tableBackgroundColor;
        superTable.style.color = table.options.tableTextColor;


        var firstColumn = document.querySelectorAll('.' + table.options.firstColumn);
        for (var i=0; i < firstColumn.length; i++){
            firstColumn[i].style.order = "-1";
        }

        if(table.options.fixedColumn === true){
            var firstColumn = document.querySelectorAll('.' + table.options.firstColumn);
            for (var i=0; i < firstColumn.length; i++){
                firstColumn[i].style.left = '0';
                firstColumn[i].style.position = 'sticky';
                firstColumn[i].style.zIndex = '1';
                firstColumn[i].style.backgroundColor = 'inherit';
            }
        }

        if(table.options.fixedHeader === true) {
            var firstLine = document.querySelector('.firstLine');
            firstLine.style.position = 'sticky';
            firstLine.style.top = '0';
            firstLine.style.zIndex = '1';
        }

        if (table.options.rowHeight === null) {
            var lines = document.querySelectorAll('.allUsers');
            for (var i = 0; i < lines.length; i++) {
                lines[i].style.height = '30px';
            }
        }
        var lines = document.querySelectorAll('.allUsers');
        for (var i=0; i < lines.length; i++){
            lines[i].style.height = table.options.rowHeight + "px";
            if (table.options.rowMouseOver === true){
                lines[i].onmouseover = function () {
                    this.style.background = table.options.tableHoverColor;
                };
                lines[i].onmouseout = function () {
                    this.style.background = table.options.tableBackgroundColor;
                }
            }

            if (table.options.rowStyle === "zebra"){
                lines[i].style.border = '1px solid';
                var oddNumber = document.querySelectorAll('.allUsers:nth-child(2n+1)');
                for (var j=0; j < oddNumber.length; j++){
                    oddNumber[j].style.background = '#118498';
                    if (table.options.rowMouseOver === true){
                        oddNumber[j].onmouseout = function () {
                            this.style.background = '#118498'
                        }
                    }
                }
            }

            if (table.options.rowStyle === "line"){
                lines[i].style.border = '1px solid';
            }


        }
    }
};