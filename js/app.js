(function () {
  'use strict';

  const STORAGE_KEY = 'study-accountability-aug2026';

  const WEEKS = [
    {
      id: 1,
      label: 'Week 1',
      range: '03 Aug – 09 Aug',
      duration: 25,
      startDate: '2026-08-03',
      days: [
        { name: 'Monday', date: '2026-08-03', slots: [
          { id: 'w1-d1-s1', label: 'Slot 1', time: '9:30 – 9:55 AM' },
          { id: 'w1-d1-s2', label: 'Slot 2', time: '11:30 – 11:55 AM' },
          { id: 'w1-d1-s3', label: 'Slot 3', time: '2:30 – 2:55 PM' },
          { id: 'w1-d1-s4', label: 'Slot 4', time: '4:30 – 4:55 PM' },
        ]},
        { name: 'Tuesday', date: '2026-08-04', slots: [
          { id: 'w1-d2-s1', label: 'Slot 1', time: '9:30 – 9:55 AM' },
          { id: 'w1-d2-s2', label: 'Slot 2', time: '11:30 – 11:55 AM' },
          { id: 'w1-d2-s3', label: 'Slot 3', time: '2:30 – 2:55 PM' },
          { id: 'w1-d2-s4', label: 'Slot 4', time: '4:30 – 4:55 PM' },
        ]},
        { name: 'Wednesday', date: '2026-08-05', slots: [
          { id: 'w1-d3-s1', label: 'Slot 1', time: '9:30 – 9:55 AM' },
          { id: 'w1-d3-s2', label: 'Slot 2', time: '11:30 – 11:55 AM' },
          { id: 'w1-d3-s3', label: 'Slot 3', time: '2:30 – 2:55 PM' },
          { id: 'w1-d3-s4', label: 'Slot 4', time: '4:30 – 4:55 PM' },
        ]},
        { name: 'Thursday', date: '2026-08-06', slots: [
          { id: 'w1-d4-s1', label: 'Slot 1', time: '9:30 – 9:55 AM' },
          { id: 'w1-d4-s2', label: 'Slot 2', time: '11:30 – 11:55 AM' },
          { id: 'w1-d4-s3', label: 'Slot 3', time: '2:30 – 2:55 PM' },
          { id: 'w1-d4-s4', label: 'Slot 4', time: '4:30 – 4:55 PM' },
        ]},
        { name: 'Friday', date: '2026-08-07', slots: [
          { id: 'w1-d5-s1', label: 'Slot 1', time: '9:30 – 9:55 AM' },
          { id: 'w1-d5-s2', label: 'Slot 2', time: '11:30 – 11:55 AM' },
          { id: 'w1-d5-s3', label: 'Slot 3', time: '2:30 – 2:55 PM' },
          { id: 'w1-d5-s4', label: 'Slot 4', time: '4:30 – 4:55 PM' },
        ]},
        { name: 'Saturday', date: '2026-08-08', slots: [
          { id: 'w1-d6-s1', label: 'Slot 1', time: '9:30 – 9:55 AM' },
          { id: 'w1-d6-s2', label: 'Slot 2', time: '11:30 – 11:55 AM' },
          { id: 'w1-d6-s3', label: 'Slot 3', time: '2:30 – 2:55 PM' },
          { id: 'w1-d6-s4', label: 'Slot 4', time: '4:30 – 4:55 PM' },
        ]},
        { name: 'Sunday', date: '2026-08-09', sunday: true, testId: 'w1-d7-test' },
      ],
    },
    {
      id: 2,
      label: 'Week 2',
      range: '10 Aug – 16 Aug',
      duration: 40,
      startDate: '2026-08-10',
      days: [
        { name: 'Monday', date: '2026-08-10', slots: [
          { id: 'w2-d1-s1', label: 'Slot 1', time: '9:30 – 10:10 AM' },
          { id: 'w2-d1-s2', label: 'Slot 2', time: '11:30 AM – 12:10 PM' },
          { id: 'w2-d1-s3', label: 'Slot 3', time: '2:30 – 3:10 PM' },
          { id: 'w2-d1-s4', label: 'Slot 4', time: '4:30 – 5:10 PM' },
        ]},
        { name: 'Tuesday', date: '2026-08-11', slots: [
          { id: 'w2-d2-s1', label: 'Slot 1', time: '9:30 – 10:10 AM' },
          { id: 'w2-d2-s2', label: 'Slot 2', time: '11:30 AM – 12:10 PM' },
          { id: 'w2-d2-s3', label: 'Slot 3', time: '2:30 – 3:10 PM' },
          { id: 'w2-d2-s4', label: 'Slot 4', time: '4:30 – 5:10 PM' },
        ]},
        { name: 'Wednesday', date: '2026-08-12', slots: [
          { id: 'w2-d3-s1', label: 'Slot 1', time: '9:30 – 10:10 AM' },
          { id: 'w2-d3-s2', label: 'Slot 2', time: '11:30 AM – 12:10 PM' },
          { id: 'w2-d3-s3', label: 'Slot 3', time: '2:30 – 3:10 PM' },
          { id: 'w2-d3-s4', label: 'Slot 4', time: '4:30 – 5:10 PM' },
        ]},
        { name: 'Thursday', date: '2026-08-13', slots: [
          { id: 'w2-d4-s1', label: 'Slot 1', time: '9:30 – 10:10 AM' },
          { id: 'w2-d4-s2', label: 'Slot 2', time: '11:30 AM – 12:10 PM' },
          { id: 'w2-d4-s3', label: 'Slot 3', time: '2:30 – 3:10 PM' },
          { id: 'w2-d4-s4', label: 'Slot 4', time: '4:30 – 5:10 PM' },
        ]},
        { name: 'Friday', date: '2026-08-14', slots: [
          { id: 'w2-d5-s1', label: 'Slot 1', time: '9:30 – 10:10 AM' },
          { id: 'w2-d5-s2', label: 'Slot 2', time: '11:30 AM – 12:10 PM' },
          { id: 'w2-d5-s3', label: 'Slot 3', time: '2:30 – 3:10 PM' },
          { id: 'w2-d5-s4', label: 'Slot 4', time: '4:30 – 5:10 PM' },
        ]},
        { name: 'Saturday', date: '2026-08-15', slots: [
          { id: 'w2-d6-s1', label: 'Slot 1', time: '9:30 – 10:10 AM' },
          { id: 'w2-d6-s2', label: 'Slot 2', time: '11:30 AM – 12:10 PM' },
          { id: 'w2-d6-s3', label: 'Slot 3', time: '2:30 – 3:10 PM' },
          { id: 'w2-d6-s4', label: 'Slot 4', time: '4:30 – 5:10 PM' },
        ]},
        { name: 'Sunday', date: '2026-08-16', sunday: true, testId: 'w2-d7-test' },
      ],
    },
    {
      id: 3,
      label: 'Week 3',
      range: '17 Aug – 23 Aug',
      duration: 60,
      startDate: '2026-08-17',
      days: [
        { name: 'Monday', date: '2026-08-17', slots: [
          { id: 'w3-d1-s1', label: 'Slot 1', time: '9:30 – 10:30 AM' },
          { id: 'w3-d1-s2', label: 'Slot 2', time: '11:30 AM – 12:30 PM' },
          { id: 'w3-d1-s3', label: 'Slot 3', time: '2:30 – 3:30 PM' },
          { id: 'w3-d1-s4', label: 'Slot 4', time: '4:30 – 5:30 PM' },
        ]},
        { name: 'Tuesday', date: '2026-08-18', slots: [
          { id: 'w3-d2-s1', label: 'Slot 1', time: '9:30 – 10:30 AM' },
          { id: 'w3-d2-s2', label: 'Slot 2', time: '11:30 AM – 12:30 PM' },
          { id: 'w3-d2-s3', label: 'Slot 3', time: '2:30 – 3:30 PM' },
          { id: 'w3-d2-s4', label: 'Slot 4', time: '4:30 – 5:30 PM' },
        ]},
        { name: 'Wednesday', date: '2026-08-19', slots: [
          { id: 'w3-d3-s1', label: 'Slot 1', time: '9:30 – 10:30 AM' },
          { id: 'w3-d3-s2', label: 'Slot 2', time: '11:30 AM – 12:30 PM' },
          { id: 'w3-d3-s3', label: 'Slot 3', time: '2:30 – 3:30 PM' },
          { id: 'w3-d3-s4', label: 'Slot 4', time: '4:30 – 5:30 PM' },
        ]},
        { name: 'Thursday', date: '2026-08-20', slots: [
          { id: 'w3-d4-s1', label: 'Slot 1', time: '9:30 – 10:30 AM' },
          { id: 'w3-d4-s2', label: 'Slot 2', time: '11:30 AM – 12:30 PM' },
          { id: 'w3-d4-s3', label: 'Slot 3', time: '2:30 – 3:30 PM' },
          { id: 'w3-d4-s4', label: 'Slot 4', time: '4:30 – 5:30 PM' },
        ]},
        { name: 'Friday', date: '2026-08-21', slots: [
          { id: 'w3-d5-s1', label: 'Slot 1', time: '9:30 – 10:30 AM' },
          { id: 'w3-d5-s2', label: 'Slot 2', time: '11:30 AM – 12:30 PM' },
          { id: 'w3-d5-s3', label: 'Slot 3', time: '2:30 – 3:30 PM' },
          { id: 'w3-d5-s4', label: 'Slot 4', time: '4:30 – 5:30 PM' },
        ]},
        { name: 'Saturday', date: '2026-08-22', slots: [
          { id: 'w3-d6-s1', label: 'Slot 1', time: '9:30 – 10:30 AM' },
          { id: 'w3-d6-s2', label: 'Slot 2', time: '11:30 AM – 12:30 PM' },
          { id: 'w3-d6-s3', label: 'Slot 3', time: '2:30 – 3:30 PM' },
          { id: 'w3-d6-s4', label: 'Slot 4', time: '4:30 – 5:30 PM' },
        ]},
        { name: 'Sunday', date: '2026-08-23', sunday: true, testId: 'w3-d7-test' },
      ],
    },
    {
      id: 4,
      label: 'Week 4',
      range: '24 Aug – 30 Aug',
      duration: 90,
      startDate: '2026-08-24',
      days: [
        { name: 'Monday', date: '2026-08-24', slots: [
          { id: 'w4-d1-s1', label: 'Slot 1', time: '9:30 – 11:00 AM' },
          { id: 'w4-d1-s2', label: 'Slot 2', time: '11:30 AM – 1:00 PM' },
          { id: 'w4-d1-s3', label: 'Slot 3', time: '2:30 – 4:00 PM' },
          { id: 'w4-d1-s4', label: 'Slot 4', time: '4:30 – 6:00 PM' },
        ]},
        { name: 'Tuesday', date: '2026-08-25', slots: [
          { id: 'w4-d2-s1', label: 'Slot 1', time: '9:30 – 11:00 AM' },
          { id: 'w4-d2-s2', label: 'Slot 2', time: '11:30 AM – 1:00 PM' },
          { id: 'w4-d2-s3', label: 'Slot 3', time: '2:30 – 4:00 PM' },
          { id: 'w4-d2-s4', label: 'Slot 4', time: '4:30 – 6:00 PM' },
        ]},
        { name: 'Wednesday', date: '2026-08-26', slots: [
          { id: 'w4-d3-s1', label: 'Slot 1', time: '9:30 – 11:00 AM' },
          { id: 'w4-d3-s2', label: 'Slot 2', time: '11:30 AM – 1:00 PM' },
          { id: 'w4-d3-s3', label: 'Slot 3', time: '2:30 – 4:00 PM' },
          { id: 'w4-d3-s4', label: 'Slot 4', time: '4:30 – 6:00 PM' },
        ]},
        { name: 'Thursday', date: '2026-08-27', slots: [
          { id: 'w4-d4-s1', label: 'Slot 1', time: '9:30 – 11:00 AM' },
          { id: 'w4-d4-s2', label: 'Slot 2', time: '11:30 AM – 1:00 PM' },
          { id: 'w4-d4-s3', label: 'Slot 3', time: '2:30 – 4:00 PM' },
          { id: 'w4-d4-s4', label: 'Slot 4', time: '4:30 – 6:00 PM' },
        ]},
        { name: 'Friday', date: '2026-08-28', slots: [
          { id: 'w4-d5-s1', label: 'Slot 1', time: '9:30 – 11:00 AM' },
          { id: 'w4-d5-s2', label: 'Slot 2', time: '11:30 AM – 1:00 PM' },
          { id: 'w4-d5-s3', label: 'Slot 3', time: '2:30 – 4:00 PM' },
          { id: 'w4-d5-s4', label: 'Slot 4', time: '4:30 – 6:00 PM' },
        ]},
        { name: 'Saturday', date: '2026-08-29', slots: [
          { id: 'w4-d6-s1', label: 'Slot 1', time: '9:30 – 11:00 AM' },
          { id: 'w4-d6-s2', label: 'Slot 2', time: '11:30 AM – 1:00 PM' },
          { id: 'w4-d6-s3', label: 'Slot 3', time: '2:30 – 4:00 PM' },
          { id: 'w4-d6-s4', label: 'Slot 4', time: '4:30 – 6:00 PM' },
        ]},
        { name: 'Sunday', date: '2026-08-30', sunday: true, testId: 'w4-d7-test' },
      ],
    },
  ];

  const STATUS_CYCLE = ['pending', 'done', 'missed'];
  const STATUS_ICON = { pending: '○', done: '✓', missed: '✗' };

  let data = loadData();
  let activeWeek = getCurrentWeekId();

  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function getEntry(id) {
    if (!data[id]) {
      data[id] = { status: 'pending', subject: '' };
    }
    return data[id];
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function getCurrentWeekId() {
    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);

    for (const week of WEEKS) {
      const lastDay = week.days[week.days.length - 1].date;
      const firstDay = week.days[0].date;
      if (todayStr >= firstDay && todayStr <= lastDay) {
        return week.id;
      }
    }

    if (todayStr < WEEKS[0].days[0].date) return 1;
    return WEEKS[WEEKS.length - 1].id;
  }

  function getAllSlotIds(week) {
    const ids = [];
    week.days.forEach(function (day) {
      if (day.sunday) {
        ids.push(day.testId);
      } else {
        day.slots.forEach(function (slot) {
          ids.push(slot.id);
        });
      }
    });
    return ids;
  }

  function getWeekStats(week) {
    const ids = getAllSlotIds(week);
    let done = 0, missed = 0, pending = 0;
    ids.forEach(function (id) {
      const status = getEntry(id).status;
      if (status === 'done') done++;
      else if (status === 'missed') missed++;
      else pending++;
    });
    const total = ids.length;
    const percent = total ? Math.round((done / total) * 100) : 0;
    return { done, missed, pending, total, percent };
  }

  function getOverallStats() {
    let done = 0, missed = 0, pending = 0, total = 0;
    WEEKS.forEach(function (week) {
      const s = getWeekStats(week);
      done += s.done;
      missed += s.missed;
      pending += s.pending;
      total += s.total;
    });
    const percent = total ? Math.round((done / total) * 100) : 0;
    return { done, missed, pending, total, percent };
  }

  function cycleStatus(current) {
    const idx = STATUS_CYCLE.indexOf(current);
    return STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length];
  }

  function renderStatusButton(id, entry) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'status-toggle ' + entry.status;
    btn.dataset.id = id;
    btn.title = 'Click: Pending → Done ✓ → Missed ✗';
    btn.textContent = STATUS_ICON[entry.status];
    btn.addEventListener('click', function () {
      const e = getEntry(id);
      e.status = cycleStatus(e.status);
      saveData();
      btn.className = 'status-toggle ' + e.status;
      btn.textContent = STATUS_ICON[e.status];
      updateAllStats();
    });
    return btn;
  }

  function renderSlotRow(slot) {
    const entry = getEntry(slot.id);
    const row = document.createElement('div');
    row.className = 'slot-row';

    row.appendChild(renderStatusButton(slot.id, entry));

    const label = document.createElement('span');
    label.className = 'slot-label';
    label.textContent = slot.label;
    row.appendChild(label);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'subject-input';
    input.placeholder = 'Subject name (fill later)';
    input.value = entry.subject;
    input.dataset.id = slot.id;
    input.addEventListener('input', function () {
      getEntry(slot.id).subject = input.value;
      saveData();
    });
    row.appendChild(input);

    const time = document.createElement('span');
    time.className = 'slot-time';
    time.textContent = slot.time;
    row.appendChild(time);

    return row;
  }

  function renderSundayDay(day) {
    const entry = getEntry(day.testId);
    const card = document.createElement('article');
    card.className = 'day-card';

    const header = document.createElement('div');
    header.className = 'day-header';
    header.innerHTML =
      '<span class="day-name">' + day.name + '</span>' +
      '<span class="day-date">' + formatDate(day.date) + '</span>';
    card.appendChild(header);

    const body = document.createElement('div');
    body.className = 'sunday-card';

    const testBlock = document.createElement('div');
    testBlock.className = 'sunday-test';

    const testTitle = document.createElement('div');
    testTitle.className = 'sunday-test-title';
    testTitle.textContent = '📝 Weekly Test — 9:00 AM to 12:00 PM';
    testBlock.appendChild(testTitle);

    const testRow = document.createElement('div');
    testRow.className = 'slot-row';
    testRow.style.gridTemplateColumns = 'auto 1fr auto';

    testRow.appendChild(renderStatusButton(day.testId, entry));

    const testInput = document.createElement('input');
    testInput.type = 'text';
    testInput.className = 'subject-input';
    testInput.placeholder = 'Test subjects (fill later)';
    testInput.value = entry.subject;
    testInput.addEventListener('input', function () {
      getEntry(day.testId).subject = testInput.value;
      saveData();
    });
    testRow.appendChild(testInput);

    const testTime = document.createElement('span');
    testTime.className = 'slot-time';
    testTime.textContent = '9:00 AM – 12:00 PM';
    testRow.appendChild(testTime);

    testBlock.appendChild(testRow);
    body.appendChild(testBlock);

    const enjoy = document.createElement('div');
    enjoy.className = 'enjoy-message';
    enjoy.innerHTML =
      '<span>🌴</span>' +
      'Test done? Ab rest karo — enjoy your day!<br>' +
      '<small style="opacity:0.7">You earned it. Kal se phir grind. 💪</small>';
    body.appendChild(enjoy);

    card.appendChild(body);
    return card;
  }

  function renderWeekday(day) {
    const card = document.createElement('article');
    card.className = 'day-card';

    const dayIds = day.slots.map(function (s) { return s.id; });
    let dayDone = 0;
    dayIds.forEach(function (id) {
      if (getEntry(id).status === 'done') dayDone++;
    });

    const header = document.createElement('div');
    header.className = 'day-header';
    header.innerHTML =
      '<div><span class="day-name">' + day.name + '</span> ' +
      '<span class="day-date">' + formatDate(day.date) + '</span></div>' +
      '<span class="day-progress">' + dayDone + '/' + day.slots.length + ' done</span>';
    card.appendChild(header);

    const list = document.createElement('div');
    list.className = 'slots-list';
    day.slots.forEach(function (slot) {
      list.appendChild(renderSlotRow(slot));
    });

    const hint = document.createElement('p');
    hint.className = 'status-hint';
    hint.textContent = 'Tip: Button click karo — ○ pending → ✓ studied → ✗ missed';
    list.appendChild(hint);

    card.appendChild(list);
    return card;
  }

  function renderDonut(stats) {
    const total = stats.total || 1;
    const donePct = (stats.done / total) * 100;
    const missedPct = (stats.missed / total) * 100;
    const pendingPct = 100 - donePct - missedPct;

    const gradient =
      'conic-gradient(' +
      'var(--done) 0% ' + donePct + '%, ' +
      'var(--missed) ' + donePct + '% ' + (donePct + missedPct) + '%, ' +
      'var(--pending) ' + (donePct + missedPct) + '% 100%)';

    return (
      '<div class="donut-wrap">' +
        '<div class="donut" style="background:' + gradient + '">' +
          '<div class="donut-hole">' + stats.percent + '%</div>' +
        '</div>' +
        '<div class="legend">' +
          '<div class="legend-item"><span class="legend-dot done"></span> Done: ' + stats.done + '</div>' +
          '<div class="legend-item"><span class="legend-dot missed"></span> Missed: ' + stats.missed + '</div>' +
          '<div class="legend-item"><span class="legend-dot pending"></span> Pending: ' + stats.pending + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderWeekPanel(week) {
    const stats = getWeekStats(week);
    const total = stats.total || 1;

    const panel = document.createElement('section');
    panel.className = 'week-panel' + (week.id === activeWeek ? ' active' : '');
    panel.id = 'week-' + week.id;

    panel.innerHTML =
      '<div class="week-header">' +
        '<div class="week-title">' + week.label + ' · ' + week.range + '</div>' +
        '<div class="week-meta">' + week.duration + ' minutes per slot · Mon–Sat study · Sunday test</div>' +
        '<div class="progress-section">' +
          '<div class="progress-label-row">' +
            '<span>Week Progress</span>' +
            '<span><strong>' + stats.done + '</strong> / ' + stats.total + ' slots completed (' + stats.percent + '%)</span>' +
          '</div>' +
          '<div class="progress-bar-track">' +
            '<div class="progress-segment done" style="width:' + (stats.done / total * 100) + '%"></div>' +
            '<div class="progress-segment missed" style="width:' + (stats.missed / total * 100) + '%"></div>' +
            '<div class="progress-segment pending" style="width:' + (stats.pending / total * 100) + '%"></div>' +
          '</div>' +
          '<div class="chart-row">' +
            '<div class="mini-chart">' +
              '<div class="mini-chart-title">Completion Breakdown</div>' +
              renderDonut(stats) +
            '</div>' +
            '<div class="mini-chart">' +
              '<div class="mini-chart-title">Daily Target</div>' +
              '<div style="font-size:0.85rem;color:var(--text-muted);padding:0.5rem 0">' +
                'Har din <strong style="color:var(--text)">' + week.duration + ' min × 4 slots</strong> = ' +
                '<strong style="color:var(--accent)">' + (week.duration * 4) + ' min/day</strong><br><br>' +
                'Week total (Mon–Sat): <strong style="color:var(--text)">' + (week.duration * 4 * 6) + ' min</strong> study<br>' +
                'Plus Sunday weekly test (3 hours)' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    week.days.forEach(function (day) {
      if (day.sunday) {
        panel.appendChild(renderSundayDay(day));
      } else {
        panel.appendChild(renderWeekday(day));
      }
    });

    return panel;
  }

  function renderWeekNav() {
    const nav = document.getElementById('weekNav');
    nav.innerHTML = '';
    WEEKS.forEach(function (week) {
      const stats = getWeekStats(week);
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = 'week-tab' + (week.id === activeWeek ? ' active' : '');
      tab.textContent = week.label + ' (' + stats.percent + '%)';
      tab.addEventListener('click', function () {
        activeWeek = week.id;
        document.querySelectorAll('.week-tab').forEach(function (t) { t.classList.remove('active'); });
        document.querySelectorAll('.week-panel').forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active');
        document.getElementById('week-' + week.id).classList.add('active');
      });
      nav.appendChild(tab);
    });
  }

  function updateAllStats() {
    const overall = getOverallStats();
    document.getElementById('totalDone').textContent = overall.done;
    document.getElementById('totalMissed').textContent = overall.missed;
    document.getElementById('totalPending').textContent = overall.pending;
    document.getElementById('overallPercent').textContent = overall.percent + '%';

    WEEKS.forEach(function (week) {
      const panel = document.getElementById('week-' + week.id);
      if (!panel) return;

      const stats = getWeekStats(week);
      const total = stats.total || 1;

      const doneSeg = panel.querySelector('.progress-segment.done');
      const missedSeg = panel.querySelector('.progress-segment.missed');
      const pendingSeg = panel.querySelector('.progress-segment.pending');
      if (doneSeg) doneSeg.style.width = (stats.done / total * 100) + '%';
      if (missedSeg) missedSeg.style.width = (stats.missed / total * 100) + '%';
      if (pendingSeg) pendingSeg.style.width = (stats.pending / total * 100) + '%';

      const labelRow = panel.querySelector('.progress-label-row span:last-child');
      if (labelRow) {
        labelRow.innerHTML = '<strong>' + stats.done + '</strong> / ' + stats.total + ' slots completed (' + stats.percent + '%)';
      }

      const donut = panel.querySelector('.donut');
      const donutHole = panel.querySelector('.donut-hole');
      if (donut && donutHole) {
        const donePct = (stats.done / total) * 100;
        const missedPct = (stats.missed / total) * 100;
        donut.style.background =
          'conic-gradient(var(--done) 0% ' + donePct + '%, var(--missed) ' + donePct + '% ' + (donePct + missedPct) + '%, var(--pending) ' + (donePct + missedPct) + '% 100%)';
        donutHole.textContent = stats.percent + '%';
      }

      const legend = panel.querySelector('.legend');
      if (legend) {
        legend.innerHTML =
          '<div class="legend-item"><span class="legend-dot done"></span> Done: ' + stats.done + '</div>' +
          '<div class="legend-item"><span class="legend-dot missed"></span> Missed: ' + stats.missed + '</div>' +
          '<div class="legend-item"><span class="legend-dot pending"></span> Pending: ' + stats.pending + '</div>';
      }

      week.days.forEach(function (day) {
        if (day.sunday || !day.slots) return;
        const dayDone = day.slots.filter(function (s) { return getEntry(s.id).status === 'done'; }).length;
        const cards = panel.querySelectorAll('.day-card');
        cards.forEach(function (card) {
          const nameEl = card.querySelector('.day-name');
          if (nameEl && nameEl.textContent === day.name) {
            const prog = card.querySelector('.day-progress');
            if (prog) prog.textContent = dayDone + '/' + day.slots.length + ' done';
          }
        });
      });
    });

    const tabs = document.querySelectorAll('.week-tab');
    WEEKS.forEach(function (week, i) {
      const stats = getWeekStats(week);
      if (tabs[i]) tabs[i].textContent = week.label + ' (' + stats.percent + '%)';
    });
  }

  function init() {
    const main = document.getElementById('mainContent');
    WEEKS.forEach(function (week) {
      main.appendChild(renderWeekPanel(week));
    });
    renderWeekNav();
    updateAllStats();

    document.getElementById('resetBtn').addEventListener('click', function () {
      if (confirm('Saara saved data delete ho jayega. Sure ho?')) {
        localStorage.removeItem(STORAGE_KEY);
        data = {};
        location.reload();
      }
    });
  }

  init();
})();
