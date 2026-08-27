/* eslint-disable @next/next/no-img-element */
const assetBase = process.env.GITHUB_PAGES === 'true' ? '/eco-quest-vr' : '';
const asset = (name: string) => `${assetBase}/${name}`;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Ana menü">
        <a className="wordmark" href="#top" aria-label="Eco Quest ana sayfa"><span className="wordmarkMark">EQ</span><span>ECO QUEST</span></a>
        <div className="navLinks"><a href="#deneyim">Deneyim</a><a href="#gorevler">Görevler</a><a href="#ekip">Ekip</a></div>
        <a className="navCta" href="#deneyim">Göreve Başla <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="aurora auroraOne" /><div className="aurora auroraTwo" /><div className="heroGrid" aria-hidden="true" />
        <div className="heroCopy">
          <span className="eyebrow"><i /> VR TABANLI ÇEVRE EĞİTİMİ</span>
          <h1>GELECEĞİ<br /><em>DOĞRU KUTUYA</em><br />BIRAK.</h1>
          <p>Eco Quest, geri dönüşümü görevler ve keşif üzerinden öğreten sürükleyici bir sanal gerçeklik deneyimi.</p>
          <div className="heroActions"><a className="primaryButton" href="#deneyim">DENEYİMİ KEŞFET <b>→</b></a><span className="zeroBadge"><b>06</b> ATIK TÜRÜ</span></div>
        </div>

        <div className="heroVisual" aria-label="Eco Quest logosu ve geri dönüşüm temalı VR sahnesi">
          <div className="logoHalo" />
          <img className="heroLogo" src={asset('ecoquest-logo.png')} alt="Eco Quest" width="1536" height="1024" />
          <div className="orbit orbitOne"><span>♻</span></div><div className="orbit orbitTwo"><span>✦</span></div>
          <div className="missionCard"><small>AKTİF GÖREV</small><b>KAMPÜSÜ TEMİZLE</b><span><i /> %68 TAMAMLANDI</span></div>
        </div>
        <div className="scrollCue"><span>AŞAĞI KAYDIR</span><i /></div>
      </section>

      <section className="ticker" aria-label="Eco Quest özellikleri">
        <span>VR DENEYİMİ</span><i>✦</i><span>ÇEVRE BİLİNCİ</span><i>✦</i><span>GÖREV &amp; SEVİYE</span><i>✦</i><span>ATIK TOPLAMA</span><i>✦</i><span>SIFIR ATIK</span>
      </section>

      <section className="manifesto" id="deneyim">
        <div className="sectionHeader">
          <span className="sectionIndex">01 / DENEYİM</span>
          <h2>BİLGİYİ OKUMA.<br /><em>İÇİNE GİR.</em></h2>
        </div>
        <div className="manifestoGrid">
          <div className="manifestoCopy">
            <p className="lead">Eco Quest, çevre eğitimini sınıfın dışına taşıyan görev tabanlı bir VR simülasyonudur.</p>
            <p>Oyuncu okul, kantin ve bahçe gibi tanıdık alanlarda atıkları keşfeder; nesneleri inceleyip doğru geri dönüşüm kutusuna yerleştirir. Her doğru karar, temiz bir kampüs ve yeni bir görev demektir.</p>
            <div className="quote"><span>“</span><p>Atığını doğru ayır.<br />Geleceğini koru.</p></div>
          </div>
          <div className="ecoCore" aria-label="Eco Quest deneyim döngüsü">
            <div className="coreRing ringA" /><div className="coreRing ringB" />
            <div className="coreCenter"><b>♻</b><small>DÖNGÜYÜ<br />TAMAMLA</small></div>
            <div className="coreNode nodeOne"><i>01</i><span>KEŞFET</span></div>
            <div className="coreNode nodeTwo"><i>02</i><span>TOPLA</span></div>
            <div className="coreNode nodeThree"><i>03</i><span>AYIR</span></div>
            <div className="coreNode nodeFour"><i>04</i><span>İLERLE</span></div>
          </div>
        </div>
      </section>

      <section className="missions" id="gorevler">
        <div className="missionsIntro">
          <span className="sectionIndex light">02 / GÖREV DÖNGÜSÜ</span>
          <h2>HER ATIK,<br /><em>BİR KARAR.</em></h2>
          <p>VR kontrolcünü kullan, çevreyi tara ve atığı doğru kategoriyle buluştur. Görevleri tamamladıkça yeni alanlar ve daha zorlu senaryolar açılır.</p>
          <div className="missionStats"><div><b>06</b><span>ATIK<br />KATEGORİSİ</span></div><div><b>03</b><span>KEŞİF<br />ALANI</span></div><div><b>∞</b><span>ÇEVRESEL<br />ETKİ</span></div></div>
        </div>
        <div className="steps">
          <article><span>01</span><div className="stepIcon">⌖</div><h3>KEŞFET</h3><p>Okulun farklı alanlarını araştır, çevreye bırakılan atıkları bul.</p></article>
          <article><span>02</span><div className="stepIcon">◎</div><h3>İNCELE</h3><p>Nesneyi VR kontrolcüsüyle al ve hangi malzemeden üretildiğini değerlendir.</p></article>
          <article><span>03</span><div className="stepIcon">↘</div><h3>AYIR</h3><p>Kağıt, plastik, cam, organik, metal veya evsel atığı doğru kutuya bırak.</p></article>
          <article><span>04</span><div className="stepIcon">✓</div><h3>İLERLE</h3><p>Görevi tamamla, sonraki bölgeyi aç ve daha zorlu senaryoya geç.</p></article>
        </div>
      </section>

      <section className="wasteSection">
        <div className="wasteHeader">
          <div><span className="sectionIndex">03 / DOĞRU KUTU</span><h2>ALTI KATEGORİ.<br /><em>TEK GELECEK.</em></h2></div>
          <p>Her malzeme aynı değildir. Doğru sınıflandırma, atığın yeniden kaynağa dönüşmesinin ilk adımıdır.</p>
        </div>
        <div className="wasteGrid">
          <article className="paper"><small>01</small><div className="binTop" /><div className="binBody"><span>▤</span></div><h3>KAĞIT</h3><p>Defter • Karton • Ambalaj</p></article>
          <article className="plastic"><small>02</small><div className="binTop" /><div className="binBody"><span>♳</span></div><h3>PLASTİK</h3><p>Şişe • Kap • Paket</p></article>
          <article className="glass"><small>03</small><div className="binTop" /><div className="binBody"><span>◇</span></div><h3>CAM</h3><p>Şişe • Kavanoz • Parça</p></article>
          <article className="organic"><small>04</small><div className="binTop" /><div className="binBody"><span>♧</span></div><h3>ORGANİK</h3><p>Yiyecek • Kabuk • Bitki</p></article>
          <article className="metal"><small>05</small><div className="binTop" /><div className="binBody"><span>⬡</span></div><h3>METAL</h3><p>Kutu • Kapak • Teneke</p></article>
          <article className="household"><small>06</small><div className="binTop" /><div className="binBody"><span>⌂</span></div><h3>EVSEL</h3><p>Peçete • Süprüntü • Karışık</p></article>
        </div>
      </section>

      <section className="zones">
        <div className="zonesTitle"><span className="sectionIndex light">04 / KEŞİF ALANLARI</span><h2>KAMPÜS<br /><em>SENİN OYUN ALANIN.</em></h2></div>
        <div className="zoneRail">
          <article className="zone classroom"><span>01</span><div className="zoneScene"><img src={asset('ecoquest-classroom.jpg')} alt="Eco Quest sınıf bölümünün oyun içi görüntüsü" width="1280" height="558" loading="lazy" /><b>OYUN İÇİ GÖRÜNTÜ</b></div><div><small>BAŞLANGIÇ BÖLGESİ</small><h3>SINIF</h3><p>Günlük okul atıklarını tanı, temel ayrıştırma görevlerini tamamla.</p></div></article>
          <article className="zone canteen"><span>02</span><div className="zoneScene"><img src={asset('ecoquest-canteen.jpg')} alt="Eco Quest kantin bölümünün oyun içi görüntüsü" width="1280" height="558" loading="lazy" /><b>OYUN İÇİ GÖRÜNTÜ</b></div><div><small>HIZLI KARAR BÖLGESİ</small><h3>KANTİN</h3><p>Yoğun atık akışında doğru kutuyu seç ve zamanla yarış.</p></div></article>
          <article className="zone garden"><span>03</span><div className="zoneScene"><img src={asset('ecoquest-garden.jpg')} alt="Eco Quest bahçe bölümünün oyun içi görüntüsü" width="1280" height="558" loading="lazy" /><b>OYUN İÇİ GÖRÜNTÜ</b></div><div><small>İLERİ SEVİYE BÖLGESİ</small><h3>BAHÇE</h3><p>Organik atıkları keşfet, doğa döngüsünü koruyan görevleri çöz.</p></div></article>
        </div>
      </section>

      <section className="impact">
        <div className="impactOrb"><span>0</span><small>ATIK<br />HEDEFİ</small><i /></div>
        <div className="impactCopy"><span className="sectionIndex">05 / ÖĞRENME ETKİSİ</span><h2>OYNA.<br />ÖĞREN.<br /><em>DÖNÜŞTÜR.</em></h2><p>Eco Quest, geri dönüşüm bilgisini ezberlenen bir kurallar dizisi olmaktan çıkarır; gözlem, fiziksel etkileşim ve anlık geri bildirimle kalıcı bir deneyime dönüştürür.</p></div>
        <div className="impactList"><div><span>01</span><p><b>ETKİLEŞİMLİ ÖĞRENME</b><small>Bilgiyi sanal ortamda uygulayarak deneyimle.</small></p></div><div><span>02</span><p><b>GÖREV TABANLI İLERLEME</b><small>Her bölümde yeni bir çevresel problemi çöz.</small></p></div><div><span>03</span><p><b>ANLIK GERİ BİLDİRİM</b><small>Doğru ve yanlış kararının sonucunu hemen gör.</small></p></div></div>
      </section>

      <section className="team" id="ekip">
        <div className="teamHeading"><span className="sectionIndex light">06 / PROJE EKİBİ</span><h2>GELECEĞİ<br /><em>TASARLAYANLAR.</em></h2></div>
        <div className="teamGrid">
          <article><span>ME</span><div><small>GELİŞTİRİCİ</small><h3>MUHAMMET ERYILMAZ</h3></div><a className="linkedinLink" href="https://www.linkedin.com/in/muhery" target="_blank" rel="noopener noreferrer" aria-label="Muhammet Eryılmaz LinkedIn profilini aç"><b>in</b><i>LinkedIn</i><em>↗</em></a></article>
          <article><span>EA</span><div><small>GELİŞTİRİCİ</small><h3>EKREM EFE ARKUN</h3></div><a className="linkedinLink" href="https://www.linkedin.com/in/ekremefearkun" target="_blank" rel="noopener noreferrer" aria-label="Ekrem Efe Arkun LinkedIn profilini aç"><b>in</b><i>LinkedIn</i><em>↗</em></a></article>
          <article><span>DA</span><div><small>GELİŞTİRİCİ</small><h3>DENİZ AKKOYUN</h3></div><a className="linkedinLink" href="https://www.linkedin.com/in/deniz-akkoyun" target="_blank" rel="noopener noreferrer" aria-label="Deniz Akkoyun LinkedIn profilini aç"><b>in</b><i>LinkedIn</i><em>↗</em></a></article>
          <article><span>GA</span><div><small>GELİŞTİRİCİ</small><h3>GAMZE NUR ASILTÜRK</h3></div><a className="linkedinLink" href="https://www.linkedin.com/in/gamzeasilturk" target="_blank" rel="noopener noreferrer" aria-label="Gamze Nur Asıltürk LinkedIn profilini aç"><b>in</b><i>LinkedIn</i><em>↗</em></a></article>
          <article className="advisor"><span>BÇ</span><div><small>PROJE DANIŞMANI</small><h3>DOÇ. DR. BARIŞ ÇUKURBAŞI</h3></div><a className="linkedinLink" href="https://www.linkedin.com/in/barocraft" target="_blank" rel="noopener noreferrer" aria-label="Barış Çukurbaşı LinkedIn profilini aç"><b>in</b><i>LinkedIn</i><em>↗</em></a></article>
        </div>
        <div className="institution"><b>MCBÜ × XR LAB</b><span>Manisa Celal Bayar Üniversitesi<br />Teknik Bilimler Meslek Yüksekokulu</span></div>
      </section>

      <section className="finalCta">
        <div className="finalGrid" /><img src={asset('ecoquest-logo.png')} alt="Eco Quest" width="1536" height="1024" />
        <span>SIFIR ATIK • GELECEĞİMİ KORU</span><h2>DÖNGÜYE<br />KATIL.</h2><p>Başlığını tak, kampüsü keşfet ve her doğru kararla geleceği yeniden şekillendir.</p><a href="#top">GÖREVE HAZIRLAN <b>↗</b></a>
      </section>

      <footer><a href="#top" className="wordmark"><span className="wordmarkMark">EQ</span><span>ECO QUEST</span></a><p>© 2026 ECO QUEST — XR LAB</p><a href="#top">YUKARI DÖN ↑</a></footer>
    </main>
  );
}
