document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('download-table-txt');

    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            const table = document.querySelector('table');
            if (!table) return;

            let csvContent = '';

            // 遍历数据行
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                const firstCell = row.querySelector('td:first-child'); // 获取每行的第一列数据
                if (firstCell) {
                    let cellContent = firstCell.textContent.trim();
                    // 检查并添加前置零
                    if (!isNaN(cellContent)) {
                        cellContent = cellContent.padStart(6, '0');
                    }
                    csvContent += cellContent + '\n'; // 添加到 CSV 内容中
                }
            });
            
            // 格式化文件名
            const date = new Date(); // 获取当前日期和时间
            const paddedDate = date.getDate().toString().padStart(2, '0'); // 格式化日期，保持前置零
            const paddedMonth = (date.getMonth() + 1).toString().padStart(2, '0'); // 格式化月份，保持前置零
            const paddedYear = date.getFullYear().toString().padStart(4, '0'); // 格式化年份，保持前置零
            const timestamp = `${paddedYear}${paddedMonth}${paddedDate}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}`; // 生成时间戳
            const filename = `table_${timestamp}.txt`; // 组合文件名

            // 创建一个 Blob 来存储 CSV 内容
            const blob = new Blob([csvContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);

            // 创建一个临时链接并触发下载
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();

            // 清除 URL 以释放资源
            URL.revokeObjectURL(url);
        });
    }
});
