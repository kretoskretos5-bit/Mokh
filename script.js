// محاكاة قاعدة البيانات
const database = {
  "words": [
    {
      "word": "Merhaba",
      "meaning": "مرحباً",
      "videoUrl": "https://www.youtube.com/embed/abc123",
      "audioUrl": "https://example.com/audio/merhaba.wav"
    },
    {
      "word": "Teşekkür ederim",
      "meaning": "شكراً لك",
      "videoUrl": "https://www.youtube.com/embed/def456",
      "audioUrl": "https://example.com/audio/tesekkur.wav"
    }
  ]
};

function searchWord() {
  const searchTerm = document.getElementById('searchInput').value.trim();
  const resultSection = document.getElementById('resultSection');
  
  if (!searchTerm) {
    resultSection.innerHTML = '<p class="error">يرجى إدخال كلمة للبحث</p>';
    return;
  }

  const foundWord = database.words.find(item => 
    item.word.toLowerCase() === searchTerm.toLowerCase()
  );

  if (foundWord) {
    resultSection.innerHTML = `
      <div class="word-result">
        <h2>الكلمة: ${foundWord.word}</h2>
        <p>المعنى: ${foundWord.meaning}</p>
        
        <div class="video-container">
          <h3>النطق الصحيح:</h3>
          <iframe width="560" height="315" src="${foundWord.videoUrl}" 
                  frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="pronunciation-test">
          <h3>اختبر نطقك:</h3>
          <audio id="audioSample" controls>
            <source src="${foundWord.audioUrl}" type="audio/wav">
            المتصفح لا يدعم تشغيل الصوت
          </audio>
          
          <br>
          <button id="recordBtn" onclick="startRecording('${foundWord.word}')">
            تسجيل نطقي
          </button>
          <div id="result"></div>
        </div>
      </div>
    `;
  } else {
    resultSection.innerHTML = '<p class="error">الكلمة غير موجودة في القاموس</p>';
  }
}

// محاكاة تسجيل الصوت والمقارنة (وهمية لأغر演示ية)
function startRecording(word) {
  document.getElementById('result').innerHTML = 
    '<p style="color: blue;">جاري التحليل... (هذه محاكاة)</p>';
  
  setTimeout(() => {
    // نتيجة وهمية عشوائية بين 70-100%
    const randomScore = Math.floor(Math.random() * 31) + 70;
    document.getElementById('result').innerHTML = 
      `<p style="color: green;">نسبة تطابق نطقك: ${randomScore}%</p>`;
  }, 2000);
}