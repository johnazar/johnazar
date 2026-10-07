const fs=require('fs');
const out=__dirname+'/../src/win95/';
const img=n=>{const f=__dirname+'/../src/img/'+n;return 'data:image/png;base64,'+fs.readFileSync(f).toString('base64')};
const F="font-family=\"Tahoma,Arial,sans-serif\"";
const W=700;
const svg=(h,body,bg='#008080')=>`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${h}" viewBox="0 0 ${W} ${h}"><rect width="${W}" height="${h}" fill="${bg}"/>${body}</svg>`;
const bevel=(x,y,w,h,raised=true,fill='#C0C0C0')=>{const a=raised?'#fff':'#808080',b=raised?'#808080':'#fff';
return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/><path d="M${x} ${y+h}V${y}H${x+w}" stroke="${a}" stroke-width="2" fill="none"/><path d="M${x+w} ${y}V${y+h}H${x}" stroke="${b}" stroke-width="2" fill="none"/>`};
const btn=(x,y,t)=>bevel(x,y,18,16)+`<text x="${x+9}" y="${y+13}" text-anchor="middle" font-size="11" font-weight="bold" ${F}>${t}</text>`;
const win=(h,title)=>`<rect x="0" y="0" width="${W}" height="${h}" fill="#C0C0C0" stroke="#000"/><rect x="3" y="3" width="${W-6}" height="22" fill="#000080"/><text x="10" y="19" fill="#fff" font-size="13" font-weight="bold" ${F}>${title}</text>${btn(W-66,6,'_')}${btn(W-46,6,'□')}${btn(W-26,6,'X')}`;
const menu=(items)=>`<text x="10" y="42" font-size="12" ${F}>${items}</text><line x1="3" y1="50" x2="${W-3}" y2="50" stroke="#808080"/>`;

// desktop
fs.writeFileSync(out+'desktop.svg',svg(90,
['💻|My Computer','📁|johnazar.exe','🗑️|Recycle Bin','🌐|The Internet'].map((s,i)=>{const [e,t]=s.split('|');const x=60+i*100;return `<text x="${x}" y="40" text-anchor="middle" font-size="28">${e}</text><text x="${x}" y="64" text-anchor="middle" fill="#fff" font-size="11" ${F}>${t}</text>`}).join('')+
`<text x="${W-10}" y="32" text-anchor="end" fill="#fff" font-size="11" ${F}>JohnOS™ v95</text><text x="${W-10}" y="48" text-anchor="end" fill="#fff" font-size="11" ${F}>© 1995-2026</text>`));

// notepad
const nb=(x,t,dis)=>bevel(x,196,t.length*7+28,24,!dis)+`<text x="${x+(t.length*7+28)/2}" y="212" text-anchor="middle" font-size="11" ${dis?'fill="#808080"':'font-weight="bold"'} ${F}>${t}</text>`;
fs.writeFileSync(out+'notepad.svg',svg(250,win(250,'📝 Welcome.exe — Notepad')+menu('File   Edit   Search   Help')+
`<rect x="6" y="54" width="${W-12}" height="190" fill="#fff" stroke="#808080" stroke-width="2"/>
<text x="${W/2}" y="95" text-anchor="middle" fill="#000080" font-size="24" font-weight="bold" ${F}>Hi There, I am John 🧑‍💻</text>
<text x="${W/2}" y="122" text-anchor="middle" font-size="12" font-family="Courier New,monospace">C:\\Users\\John&gt; whoami</text>
<text x="${W/2}" y="148" text-anchor="middle" fill="#404040" font-size="12" ${F}>Full-Stack Developer • Vue.js • Laravel • Node.js</text>
<text x="${W/2}" y="166" text-anchor="middle" fill="#404040" font-size="12" ${F}>Building for the web since <tspan font-weight="bold">Windows 95</tspan> was cutting edge.</text>`+
nb(215,'💾 Hire Me')+nb(310,'📂 View Projects')+nb(430,'✉️ Contact',true),'#C0C0C0'.replace('#C0C0C0','#008080')));

// explorer
const cols=[['WEB FRAMEWORK',['laravel.png'],1],['IDE & EDITORS',['vscode.png'],1],['TOOLS',['git.png','insomnia.png','terminal.png'],3],['MISC.',['wordpress.png','docker.png'],2]];
const cw=(W-12)/4;
fs.writeFileSync(out+'explorer.svg',svg(200,win(200,'📁 C:\\JOHN\\SKILLS — File Explorer')+
cols.map(([t,ims,n],i)=>{const x=6+i*cw;return bevel(x,32,cw,120)+`<rect x="${x+2}" y="34" width="${cw-4}" height="18" fill="#000080"/><text x="${x+cw/2}" y="47" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold" ${F}>${t.replace('&','&amp;')}</text><rect x="${x+2}" y="53" width="${cw-4}" height="80" fill="#fff"/>`+
ims.map((im,j)=>`<image x="${x+cw/2-(ims.length*50-5)/2+j*50}" y="68" width="45" height="45" xlink:href="${img(im)}"/>`).join('')+
`<text x="${x+cw/2}" y="146" text-anchor="middle" font-size="9" ${F}>${n} object(s)</text>`}).join('')+
`<line x1="6" y1="162" x2="${W-6}" y2="162" stroke="#808080"/><text x="10" y="182" font-size="10" ${F}>8 Folder(s) • 16 File(s) • Status: Ready • 💾 1.44 MB free</text>`));

// stats window top + bottom
fs.writeFileSync(out+'stats-top.svg',svg(80,win(80,'📊 System Properties — github-readme-stats.exe')+menu('File   Edit   View   Performance   Help')+
['General','Performance','Languages'].map((t,i)=>{const x=10+i*92;return bevel(x,56,i==0?84:90,20,true)+`<text x="${x+(i==0?42:45)}" y="70" text-anchor="middle" font-size="11" ${i==0?'font-weight="bold"':''} ${F}>${t}</text>`}).join('')));
fs.writeFileSync(out+'stats-bottom.svg',svg(40,`<rect width="${W}" height="40" fill="#C0C0C0" stroke="#000"/><text x="${W/2}" y="24" text-anchor="middle" font-size="10" fill="#404040" ${F}>💾 If you forked this repo, change username=johnazar to yours!</text>`));

// tip
fs.writeFileSync(out+'tip.svg',svg(130,`<rect x="0" y="0" width="${W}" height="130" fill="#C0C0C0" stroke="#000"/><rect x="3" y="3" width="${W-6}" height="20" fill="#000080"/><text x="8" y="18" fill="#fff" font-size="12" font-weight="bold" ${F}>⚠️ Tip of the Day</text>${btn(W-26,5,'X')}
<text x="25" y="70" font-size="30">💡</text><text x="70" y="55" font-size="12" ${F}>Did you know? This profile runs on <tspan font-weight="bold">JohnOS 95</tspan>.</text><text x="70" y="73" font-size="12" ${F}>For best experience, view in 256 colors at 800x600 resolution!</text>`+
bevel(70,90,60,24)+`<text x="100" y="106" text-anchor="middle" font-size="11" font-weight="bold" ${F}>OK</text>`+bevel(145,90,60,24,false)+`<text x="175" y="106" text-anchor="middle" font-size="11" fill="#808080" ${F}>Cancel</text>`,'#008080'));

// taskbar + footer
fs.writeFileSync(out+'taskbar.svg',svg(70,`<rect x="0" y="0" width="${W}" height="34" fill="#C0C0C0" stroke="#808080"/>`+bevel(4,4,70,26)+`<text x="39" y="22" text-anchor="middle" font-size="12" font-weight="bold" ${F}>⊞ Start</text>`+bevel(84,4,290,26,false)+`<text x="94" y="22" font-size="11" ${F}>johnazar.exe  |  📁 Explorer  |  📊 Stats</text>`+bevel(W-170,4,166,26,false)+`<text x="${W-160}" y="22" font-size="11" ${F}>🔊   EN   🕒 12:34 PM</text><text x="${W/2}" y="55" text-anchor="middle" fill="#fff" font-size="10" ${F}>JohnOS™ 95 — It's now safe to turn off your computer.  |  Press CTRL+ALT+DEL to view portfolio</text>`));
