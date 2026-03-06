// ฐานข้อมูลข้อสอบ (เพิ่มไฟล์ใหม่ที่นี่)
const exams = [
    { title: ' GAT1 มี.ค. การสื่อสารภาษาอังกฤษ', year: 2552, link: 'https://drive.google.com/file/d/1U1XtHfBZjUV64yHHa05E4LtUNGYgUaWs/view?usp=sharing' },
    { title: 'GAT1 ก.ค.การสื่อสารภาษาอังกฤษ', year: 2552, link: 'https://drive.google.com/file/d/1e5k1L3VZq1pWNmSMerrgiylqZIWamZju/view?usp=sharing' },
    { title: 'GAT1 ต.ค.การสื่อสารภาษาอังกฤษ', year: 2552, link: 'https://drive.google.com/file/d/12GK6eNLLmIcRvZW2QbMZ_ChXraQvs8Cz/view?usp=sharing' },
    { title: 'GAT1 มี.ค. การสื่อสารภาษาอังกฤษ', year: 2553, link: 'https://drive.google.com/file/d/1NHoJdqsIIXvFqYgpe9vrMc9jPoTNJ2KW/view?usp=sharing' },
    { title: 'GAT1 ก.ค.การสื่อสารภาษาอังกฤษ', year: 2553, link: 'https://drive.google.com/file/d/1dqchQ-KjZ9e7PG9AW_w_oN3yKHs1xhfI/view?usp=sharing' },
    { title: 'GAT1 ต.ค.การสื่อสารภาษาอังกฤษ', year: 2553, link: 'https://drive.google.com/file/d/1cuDryWe5YhqLZzYgfgyVPeUpBVHtrAIP/view?usp=sharing' },
    { title: 'GAT1 มี.ค. การสื่อสารภาษาอังกฤษ', year: 2554, link: 'https://drive.google.com/file/d/1nVmlRWTFGdvvyjF2P-La3p85GJJ-SeHu/view?usp=sharing' },
    { title: 'GAT1 ต.ค.การสื่อสารภาษาอังกฤษ', year: 2554, link: 'https://drive.google.com/file/d/1jWSWuPnG4Feo5IRZg6p1axlRb5V5kt6x/view?usp=sharing' },
    { title: 'GAT1 มี.ค.การสื่อสารภาษาอังกฤษ', year: 2555, link: 'https://drive.google.com/file/d/1R58hgoodqMmfv0nyt__SIDrUQ8rmWvfe/view?usp=sharing' },
    { title: 'GAT1 มี.ค.การสื่อสารภาษาอังกฤษ', year: 2556, link: 'https://drive.google.com/file/d/1yxLFyhx3KLY-zbaZxAHNrYBXRQas1tIl/view?usp=sharing' },
    { title: 'เฉลย GAT1 มี.ค.การสื่อสารภาษาอังกฤษ', year: 2556, link: 'https://drive.google.com/file/d/1pdL32NBFrg5x3eM7Mo4vrDXSKan8U-3S/view?usp=sharing' },
    { title: 'GAT1 พ.ย.การสื่อสารภาษาอังกฤษ', year: 2557, link: 'https://drive.google.com/file/d/1JVToEeO89u9IZyIwvCEmJVgnClFhs0ji/view?usp=sharing' },
    { title: 'GAT1 มี.ค.การสื่อสารภาษาอังกฤษ', year: 2560, link: 'https://drive.google.com/file/d/1YfhIFJ7Rg41Cmpe_vjwVmL5k2_i4oCCE/view?usp=sharing' },
    { title: 'เฉลยGAT1 มี.ค.การสื่อสารภาษาอังกฤษ', year: 2557, link: 'https://drive.google.com/file/d/1PI4Kg1zDgHONo9lArCBDWjy-eufApmwW/view?usp=sharing' },
    { title: 'GAT1 มี.ค. การสื่อสารภาษาอังกฤษ', year: 2557, link: 'https://drive.google.com/file/d/10xYAbVKipsg187kqK-7fIUFTlLmH0Puk/view?usp=sharing' },
    { title: 'GAT1 มี.ค. การสื่อสารภาษาอังกฤษ', year: 2558, link: 'https://drive.google.com/file/d/147HsuNJ7ok5C9l4GMyUZSDuIqeZCaukC/view?usp=sharing' },
    { title: 'เฉลยGAT1 มี.ค.การสื่อสารภาษาอังกฤษ', year: 2558, link: 'https://drive.google.com/file/d/1aYj89jvHDZTmVpJQe-V6U9v6LLkdhML8/view?usp=sharing' },
    { title: 'GAT1 ต.ค. การสื่อสารภาษาอังกฤษ', year: 2558, link: 'https://drive.google.com/file/d/1-3qZlXcj6sF3kI2M5XCqVgfDB-DfiI6J/view?usp=sharing' },
    { title: 'GAT1 มี.ค. การสื่อสารภาษาอังกฤษ', year: 2559, link: 'https://drive.google.com/file/d/1EMV9QH87bHcg7dwEicjaytifDcccuTdE/view?usp=sharing' },
    { title: 'เฉลยGAT1 มี.ค.การสื่อสารภาษาอังกฤษ', year: 2559, link: 'https://drive.google.com/file/d/1bHLFkq-AzcTPocOOJQK5iEhIKG8YqWN6/view?usp=sharing' },
    { title: 'GAT1 ก.พ. การสื่อสารภาษาอังกฤษ', year: 2561, link: 'https://drive.google.com/file/d/1h8I8BZ638JaxZPeKXzVtABTT-COxIllW/view?usp=sharing' },
    { title: 'เฉลยGAT1 ก.พ.การสื่อสารภาษาอังกฤษ', year: 2561, link: 'https://drive.google.com/file/d/1IiitXnoknXQ3VA5UCGsxcJ2Knd5gqAJJ/view?usp=sharing' },
    { title: 'GAT1 มี.ค. การสื่อสารภาษาอังกฤษ', year: 2562, link: 'https://drive.google.com/file/d/1QyiQWR3QGIundH3-A2KyQlfQyaIVf1Nu/view?usp=sharing' },
    { title: 'เฉลยGAT1 มี.ค.การสื่อสารภาษาอังกฤษ', year: 2562, link: 'https://drive.google.com/file/d/12evIIJG0B4bDuUqLz0XPCyzX4WcTXSnk/view?usp=sharing' },
    { title: 'GAT1 ม.ค. การสื่อสารภาษาอังกฤษ', year: 2562, link: 'https://drive.google.com/file/d/107E93PfS1xqUw65d5gWj449jGBwBq5B1/view?usp=sharing' },












];


// อ้างอิงถึงส่วนต่างๆ บนหน้าเว็บ
const searchInput = document.getElementById('searchInput');
const yearFilter = document.getElementById('yearFilter');
const examContainer = document.getElementById('examContainer');

// ฟังก์ชันดึง "ปี" จากข้อมูลมาใส่ใน Dropdown
function populateYears() {
    // ดึงปีที่ไม่ซ้ำกัน และเรียงจากมากไปน้อย
    const years = [...new Set(exams.map(exam => exam.year))].sort((a, b) => b - a);
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = 'ปี พ.ศ. ' + year;
        yearFilter.appendChild(option);
    });
}

// ฟังก์ชันสร้างการ์ดข้อสอบ
function renderExams(dataToRender) {
    examContainer.innerHTML = ''; 
    
    if (dataToRender.length === 0) {
        examContainer.innerHTML = '<div class="no-results">ไม่พบข้อสอบที่ค้นหาครับ ลองเปลี่ยนคำหรือเปลี่ยนปีดูนะ</div>';
        return;
    }

    dataToRender.forEach(exam => {
        const card = document.createElement('div');
        card.className = 'exam-card';
        card.innerHTML = `
            <div>
                <h2 class="exam-title">${exam.title}</h2>
                <p class="exam-year">ปีการศึกษา ${exam.year}</p>
            </div>
            <a href="${exam.link}" target="_blank" class="download-btn">ดาวน์โหลด PDF</a>
        `;
        examContainer.appendChild(card);
    });
}

// ฟังก์ชันคัดกรองข้อมูล
function filterExams() {
    const searchText = searchInput.value.toLowerCase();
    const selectedYear = yearFilter.value;

    const filtered = exams.filter(exam => {
        const matchText = exam.title.toLowerCase().includes(searchText);
        const matchYear = selectedYear === 'all' || exam.year.toString() === selectedYear;
        return matchText && matchYear;
    });

    renderExams(filtered); 
}

// ผูก Event Listener เมื่อมีการพิมพ์หรือเปลี่ยนปี
searchInput.addEventListener('input', filterExams);
yearFilter.addEventListener('change', filterExams);

// เริ่มต้นการทำงานตอนเปิดหน้าเว็บ
populateYears();
renderExams(exams);