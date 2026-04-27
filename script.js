document.addEventListener('DOMContentLoaded', () => {
    const boot = document.getElementById('boot-overlay');
    const bootBar = document.getElementById('boot-bar');
    const main = document.getElementById('main-content');
    const score = document.getElementById('score-text');
    const dimmer = document.getElementById('dimmer');

    // --- 1. ENGINEERED BOOT ---
    let bootP = 0;
    const bootI = setInterval(() => {
        bootP += Math.floor(Math.random()*15)+5;
        if(bootP >= 100) { bootP = 100; clearInterval(bootI);
            setTimeout(() => { boot.style.transform = 'translateY(-100%)'; }, 300);
        }
        bootBar.style.width = bootP + '%';
    }, 100);

    // --- 2. PRIVACY ---
    score.onclick = () => score.classList.toggle('blurred');

    // --- 3. DYSTOPIAN MICRO-ANIMATIONS (Hardened) ---
    setInterval(() => {
        const targetId = Math.random() > 0.5 ? 'ap-shard' : 'threat-shard';
        const el = document.getElementById(targetId);
        el.classList.add('trembling');
        setTimeout(() => el.classList.remove('trembling'), 400);
    }, 4000);

    // --- 4. LOGIC PORT: FINANCIAL NODES ---
    let nodes = [
        { id: 1, t: 'LEASE_DEBT', v: -52, flip: true },
        { id: 2, t: 'AP_INSURANCE', v: 12, flip: true }
    ];

    function syncFlipper() {
        const track = document.getElementById('flipper-track');
        track.innerHTML = '';
        const active = nodes.filter(n => n.flip);
        active.forEach((n, idx) => {
            const s = document.createElement('div');
            s.className = `slide ${idx === 0 ? 'active' : ''}`;
            s.innerHTML = `<span class="flipper-n">${n.t}</span><span class="flipper-v">${n.v<0?'':'+'}${n.v} AP</span>`;
            track.append(s);
        });
        if(active.length === 0) track.innerHTML = '<div class="slide active"><span class="flipper-n">DATA_NULL</span></div>';
    }

    let flipIdx = 0;
    setInterval(() => {
        const slides = document.querySelectorAll('#flipper-track .slide');
        if(slides.length <= 1) return;
        slides[flipIdx].classList.remove('active');
        flipIdx = (flipIdx + 1) % slides.length;
        slides[flipIdx].classList.add('active');
    }, 3000);

    function renderFinance() {
        const ledger = document.getElementById('finance-ledger');
        ledger.innerHTML = '';
        nodes.forEach(n => {
            const c = document.createElement('div');
            c.className = 'signal-shard'; c.style.background = '#FFF'; c.style.color = '#000';
            c.innerHTML = `
                <div style="flex:1;">
                    <div class="corner-meta" style="position:static;">LEDGER_ID_${n.id}</div>
                    <div style="font-weight:900; font-size:1.2rem;">${n.t}</div>
                    <div style="font-family:var(--font-heavy); color:var(--assembly-magenta);">${n.v<0?'':'+'}${n.v} AP</div>
                    <button style="border:none; background:none; font-family:var(--font-mono); font-weight:900; color:var(--assembly-magenta); cursor:pointer; margin-top:5px;" onclick="triggerDelete(${n.id}, '${n.t}')">[ VOID ]</button>
                </div>
                <div style="width:40px; height:40px; border:4px solid #000; cursor:pointer; display:flex; align-items:center; justify-content:center; font-weight:900;" onclick="toggleFlip(${n.id})">${n.flip?'X':''}</div>
            `;
            ledger.append(c);
        });
        syncFlipper();
    }
    window.toggleFlip = (id) => { const n = nodes.find(x => x.id === id); if(n) n.flip = !n.flip; renderFinance(); };

    // --- 5. ALERTS & RIBBON ---
    const alertDataMap = {
        "0": { t: "LOCKDOWN", b: "EMERGENCY PROTOCOL ACTIVE. SECURE SECTOR 1 HANDSHAKES." },
        "1": { t: "BREACH", b: "FIREWALL BYPASS DETECTED IN PIPE GRID 4." },
        "2": { t: "THREAT", b: "ANOMALOUS ACTIVITY RECORDED ON MESH GATEWAY." }
    };
    let ribbonState = [{id:0,unread:true},{id:1,unread:true},{id:2,unread:true}];
    function renderRibbon() {
        const rib = document.getElementById('alert-ribbon');
        rib.innerHTML = '';
        ribbonState.forEach(s => {
            const data = alertDataMap[s.id];
            const node = document.createElement('div');
            node.className = `brutal-node ${s.unread?'unread':''}`;
            node.style.transform = `rotate(${Math.random()*12 - 6}deg)`;
            node.innerHTML = `<span style="font-size:0.6rem; font-weight:900;">${data.t}</span>`;
            node.onclick = () => {
                s.unread = false;
                document.getElementById('alert-head').innerText = data.t;
                document.getElementById('alert-body').innerText = data.b;
                openDrawer('draw-alert-view');
                renderRibbon();
            };
            rib.append(node);
        });
    }

    // --- 6. ADVANCED WORKFLOWS ---
    let targetDeleteId = null;
    window.triggerDelete = (id, title) => { targetDeleteId = id; document.getElementById('delete-meta').innerText = `LEDGER_ENTRY: [${title}]`; document.getElementById('mod-delete').classList.add('active'); };
    document.getElementById('btn-confirm-delete').onclick = () => {
        const bar = document.getElementById('delete-bar');
        document.getElementById('delete-scan').style.display = 'block';
        let p = 0; const idx = setInterval(() => {
            p += 10; bar.style.width = p + '%';
            if(p >= 100) { clearInterval(idx); nodes = nodes.filter(n => n.id !== targetDeleteId); renderFinance(); document.getElementById('mod-delete').classList.remove('active'); }
        }, 100);
    };

    // Drawer
    window.openDrawer = (id) => { closeAll(); dimmer.classList.add('active'); document.getElementById(id).classList.add('active'); };
    window.closeAll = () => { dimmer.classList.remove('active'); document.querySelectorAll('.brutal-drawer').forEach(d => d.classList.remove('active')); };
    dimmer.onclick = closeAll;

    document.getElementById('btn-show-finance').onclick = () => openDrawer('draw-finance');
    document.getElementById('btn-show-growth').onclick = () => openDrawer('draw-growth');

    // --- 7. GROWTH TIMEFRAME SWITCHER (Dunning-Kruger Spec) ---
    const growthPaths = {
        'LIFE':  { p: 'M0,140 C20,10 60,10 80,40 C100,80 120,130 150,135 C200,135 250,120 300,100', v: '+18.5%', target: false },
        'YEAR':  { p: 'M0,120 C40,140 80,80 120,100 C160,110 240,40 300,20', v: '+12.4%', target: false },
        'MONTH': { p: 'M0,80 C50,100 100,60 150,90 C200,70 250,110 300,95', v: '-2.1%', target: false },
        'WEEK':  { p: 'M0,120 L50,110 L100,130 L150,60 L200,80 L250,40 L300,55', v: '+4.2%', target: true },
        'DAY':   { p: 'M0,100 L30,90 L60,110 L90,85 L120,95 L150,70 L180,80 L210,60 L240,75 L270,55 L300,65', v: '+0.04%', target: true }
    };

    document.querySelectorAll('.timeframe-btn').forEach(btn => {
        btn.onclick = () => {
            const time = btn.getAttribute('data-time');
            const data = growthPaths[time];
            
            // UI Update
            document.querySelectorAll('.timeframe-btn').forEach(b => b.style.background = '#222');
            btn.style.background = 'var(--assembly-magenta)';
            
            document.getElementById('growth-label').innerText = `YIELD_TREND // ${time.replace('_', ' ')}`;
            document.getElementById('growth-value').innerText = data.v;
            document.getElementById('growth-chart-path').setAttribute('d', data.p);

            // Target Line Visibility
            const targetLine = document.getElementById('growth-chart-target');
            const legend = document.getElementById('target-legend');
            if(data.target) {
                targetLine.style.display = 'block';
                legend.style.display = 'block';
            } else {
                targetLine.style.display = 'none';
                legend.style.display = 'none';
            }
        };
    });

    renderFinance(); renderRibbon();
});
