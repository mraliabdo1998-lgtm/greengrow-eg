const pesticideProducts = [
  {name:'%ميتاستور -39,1 ', desc:'مبيد فطري ضمن برامج العناية الوقائية بالمحاصيل.', price:190, type:'مبيدات زراعية', image:'metastor-391.png'},
  {name:'فيلد سيف 48 EC', desc:'منتج مخصص للاستخدام وفقاً لملصق المنتج والتوصيات.', price:240, type:'مبيدات زراعية', image:'pesticide-2.png'},
  {name:'كروب كير 35 SC', desc:'خيار متاح لبرامج مكافحة الآفات الزراعية المسجلة.', price:215, type:'مبيدات زراعية', image:'pesticide-3.png'},
  {name:'أجرو جارد 1.8% EC', desc:'يستخدم تحت إشراف المختصين وبحسب إرشادات العبوة.', price:175, type:'مبيدات زراعية', image:'pesticide-4.png'},
  {name:'بلانت بروتكت 50 WG', desc:'منتج للعناية بالمحاصيل ضمن الاستخدامات المعتمدة.', price:265, type:'مبيدات زراعية', image:'pesticide-5.png'},
  {name:'جرين فيلد 40 SC', desc:'تركيبة زراعية للاستخدام المهني الموجّه.', price:230, type:'مبيدات زراعية', image:'pesticide-6.png'}
];
const fertilizerProducts = [
  {name:'NPK 20-20-20', desc:'سماد مركب متوازن لبرامج التسميد المختلفة.', price:250, type:'أسمدة ومغذيات', image:'metastor-391.png'},
  {name:'سماد عضوي محبب', desc:'منتج عضوي داعم لتحسين خصوبة التربة.', price:180, type:'أسمدة ومغذيات', image:'fertilizer-2.png'},
  {name:'سلفات بوتاسيوم', desc:'مصدر للبوتاسيوم ضمن برامج تغذية النبات.', price:230, type:'أسمدة ومغذيات', image:'fertilizer-3.png'},
  {name:'نترات كالسيوم', desc:'مصدر للكالسيوم ضمن برامج التسميد المتوازنة.', price:200, type:'أسمدة ومغذيات', image:'fertilizer-4.png'},
  {name:'هيوميك أسيد', desc:'مادة عضوية تستخدم ضمن برامج خدمة التربة.', price:195, type:'أسمدة ومغذيات', image:'fertilizer-5.png'},
  {name:'مخلوط عناصر صغرى', desc:'تركيبة عناصر غذائية للاستخدام حسب الحاجة.', price:165, type:'أسمدة ومغذيات', image:'fertilizer-6.png'}
];
const egp = value => new Intl.NumberFormat('ar-EG').format(value) + ' ج.م';
function productCard(product) { return `<article class="product-card"><div class="product-visual"><img src="assets/products/${product.image}" alt="${product.name}" loading="lazy" /></div><div class="product-content"><small>${product.type}</small><h4>${product.name}</h4><p>${product.desc}</p><div class="product-footer"><strong>${egp(product.price)}</strong><button class="detail-button" type="button" data-name="${product.name}">عرض التفاصيل <span>←</span></button></div></div></article>`; }
const pesticideGrid = document.querySelector('#pesticideGrid');
const fertilizerGrid = document.querySelector('#fertilizerGrid');
if (pesticideGrid) pesticideGrid.innerHTML = pesticideProducts.map(productCard).join('');
if (fertilizerGrid) fertilizerGrid.innerHTML = fertilizerProducts.map(productCard).join('');
const menuToggle = document.querySelector('#menuToggle');
if (menuToggle) menuToggle.addEventListener('click', e => { const nav=document.querySelector('#mainNav'); const open=nav.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded',open); });
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => { document.querySelector('#mainNav').classList.remove('open'); if(menuToggle) menuToggle.setAttribute('aria-expanded','false'); }));
document.querySelectorAll('.detail-button').forEach(button => button.addEventListener('click', () => { button.textContent='التفاصيل قريباً'; button.disabled=true; }));
const pageName = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => { if (link.getAttribute('href') === pageName) link.classList.add('active'); });
document.querySelectorAll('.map-wrap').forEach(map => {
  map.querySelector('.map-grid')?.remove(); map.querySelector('.map-pin')?.remove();
  const iframe = document.createElement('iframe');
  iframe.title = 'خريطة موقع GreenGrow في مدينة السادات';
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  iframe.src = 'https://www.google.com/maps?q=Sadat%20City%2C%20Menoufia%2C%20Egypt&z=13&output=embed';
  map.prepend(iframe);
  const mapCard = map.querySelector('.map-card');
  if (mapCard) { const mapLink = mapCard.querySelector('a'); if (mapLink) { mapLink.textContent = 'فتح الموقع على الخريطة'; mapLink.classList.add('map-button'); } }
});
const contactList = document.querySelector('.contact-page .social-list');
if (contactList && !contactList.querySelector('.location-card')) contactList.insertAdjacentHTML('beforeend', '<a class="location-card" href="https://maps.app.goo.gl/howxdxTs5r5gGwE48" target="_blank" rel="noopener"><span class="social-icon phone">●</span><div><strong>الموقع</strong><small>مدينة السادات، المنوفية، مصر</small></div><b>←</b></a>');
