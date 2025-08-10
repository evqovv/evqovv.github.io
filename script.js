const danmakuContainer = document.querySelector('div');

let fontPx = window.innerHeight * (3 / 100);

const birthdayWishes = [
	{ lang: "Chinese", code: "zh", str: "生日快乐，Talia！" },
	{ lang: "English", code: "en", str: "Happy Birthday, Talia!" },
	{ lang: "Arabic", code: "ar", str: "عيد ميلاد سعيد، تاليا!" },
	{ lang: "Spanish", code: "es", str: "¡Feliz cumpleaños, Talia!" },
	{ lang: "French", code: "fr", str: "Joyeux anniversaire, Talia !" },
	{ lang: "German", code: "de", str: "Herzlichen Glückwunsch zum Geburtstag, Talia!" },
	{ lang: "Italian", code: "it", str: "Buon compleanno, Talia!" },
	{ lang: "Russian", code: "ru", str: "С днём рождения, Талия!" },
	{ lang: "Japanese", code: "ja", str: "タリア、お誕生日おめでとう！" },
	{ lang: "Korean", code: "ko", str: "탈리아, 생일 축하해!" },
	{ lang: "Portuguese", code: "pt", str: "Feliz aniversário, Talia!" },
	{ lang: "Greek", code: "el", str: "Χρόνια πολλά, Talia!" },
	{ lang: "Dutch", code: "nl", str: "Gefeliciteerd met je verjaardag, Talia!" },
	{ lang: "Swedish", code: "sv", str: "Grattis på födelsedagen, Talia!" },
	{ lang: "Turkish", code: "tr", str: "Doğum günün kutlu olsun, Talia!" },
	{ lang: "Polish", code: "pl", str: "Wszystkiego najlepszego z okazji urodzin, Talia!" },
	{ lang: "Ukrainian", code: "uk", str: "З днем народження, Талія!" },
	{ lang: "Thai", code: "th", str: "สุขสันต์วันเกิดนะ Talia!" },
	{ lang: "Vietnamese", code: "vi", str: "Chúc mừng sinh nhật, Talia!" },
	{ lang: "Hebrew", code: "he", str: "יום הולדת שמח, Talia!" },
	{ lang: "Hungarian", code: "hu", str: "Boldog születésnapot, Talia!" },
	{ lang: "Finnish", code: "fi", str: "Hyvää syntymäpäivää, Talia!" },
	{ lang: "Czech", code: "cs", str: "Všechno nejlepší k narozeninám, Talia!" },
	{ lang: "Romanian", code: "ro", str: "La mulți ani, Talia!" },
	{ lang: "Bulgarian", code: "bg", str: "Честит рожден ден, Talia!" },
	{ lang: "Slovenian", code: "sl", str: "Vse najboljše za rojstni dan, Talia!" },
	{ lang: "Croatian", code: "hr", str: "Sretan rođendan, Talia!" },
	{ lang: "Serbian", code: "sr", str: "Срећан рођендан, Талија!" },
	{ lang: "Irish", code: "ga", str: "Lá breithe sona duit, Talia!" },
	{ lang: "Catalan", code: "ca", str: "Feliç aniversari, Talia!" },
	{ lang: "Basque", code: "eu", str: "Zorionak, Talia!" },
	{ lang: "Welsh", code: "cy", str: "Penblwydd hapus, Talia!" },
	{ lang: "Icelandic", code: "is", str: "Til hamingju með afmælið, Talia!" },
	{ lang: "Maltese", code: "mt", str: "L-Għeluq sninek it-tajjeb, Talia!" },
	{ lang: "Albanian", code: "sq", str: "Gëzuar ditëlindjen, Talia!" },
	{ lang: "Swahili", code: "sw", str: "Heri ya siku ya kuzaliwa, Talia!" },
	{ lang: "Hausa", code: "ha", str: "Barka da ranar haihuwa, Talia!" },
	{ lang: "Tagalog", code: "tl", str: "Maligayang kaarawan, Talia!" },
	{ lang: "Nepali", code: "ne", str: "जन्मदिनको शुभकामना, Talia!" },
	{ lang: "Bengali", code: "bn", str: "শুভ জন্মদিন, Talia!" },
	{ lang: "Tamil", code: "ta", str: "பிறந்தநாள் வாழ்த்துகள், Talia!" },
	{ lang: "Kannada", code: "kn", str: "ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು, Talia!" },
	{ lang: "Malayalam", code: "ml", str: "ജന്മദിനാശംസകൾ, Talia!" },
	{ lang: "Occitan", code: "oc", str: "Bon anniversari, Talia!" },
	{ lang: "Pashto", code: "ps", str: "د زوکړې کلیزه مو مبارک، Talia!" },
	{ lang: "Kurdish", code: "ku", str: "Rojbûna te pîroz be, Talia!" },
	{ lang: "Mongolian", code: "mn", str: "Төрсөн өдрийн мэнд хүргэе, Talia!" },
	{ lang: "Tibetan", code: "bo", str: "དགའ་སྐྱིད་ལོ་གསར་བའི་ལོ་ལེགས་བཀྲ་ཤིས་བདེ་ལེགས། Talia" },
	{ lang: "Balinese", code: "ban", str: "Rahajeng warsa anyar, Talia!" }
];

const emoji = [
	"🎂",
	"🦊",
	"🥭",
	"🥝",
	"🍓",
	"☪️",
	"🕋",
];

function generateDanmakuContent(danmaku) {
	let birthdayWish = birthdayWishes.at(getRandomNumber(0, birthdayWishes.length - 1));

	danmaku.p.lang = birthdayWish.code;
	danmaku.p.textContent = birthdayWish.str;
	danmaku.p.textContent += emoji.at(getRandomNumber(0, emoji.length - 1)).repeat(getRandomNumber(0, 7));
}

function resetDanmaku(danmaku) {
	danmaku.x = window.innerWidth + getRandomNumber(0, 300);
	danmaku.p.style.transform = `translateX(${danmaku.x}px)`;

	danmaku.p.style.color = getRandomColorExceptBlack();

	generateDanmakuContent(danmaku);

	danmaku.speed = getRandomFloat(0.5, 1.5);
}

class Danmaku {
	constructor(x) {
		this.p = document.createElement('p');
		this.p.style.position = 'absolute';
		this.p.style.top = fontPx * 1.3 * x + 'px';
		this.p.style.fontSize = fontPx + 'px';
		this.p.style.whiteSpace = 'nowrap';
		this.p.x = 0;
		this.p.style.willChange = 'transform';

		resetDanmaku(this);

		danmakuContainer.appendChild(this.p);

		requestAnimationFrame(() => {
			const rect = this.p.getBoundingClientRect();
			this.widthCached = rect.width + 100;
		});
	}
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomFloat(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomColorExceptBlack() {
	const r = getRandomNumber(50, 255);
	const g = getRandomNumber(50, 255);
	const b = getRandomNumber(50, 255);

	const toHex = n => n.toString(16).padStart(2, '0');

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function getNumberOfRows() {
	return rows = Math.floor(window.innerHeight / (fontPx * 1.3));
}

function createDanmakuRows() {
	let danmakuArray = [];
	for (let i = 0; i < getNumberOfRows(); i++) {
		danmakuArray.push(new Danmaku(i));
	}
	return danmakuArray;
}

function danmakuAnimate() {
	for (const danmaku of danmakuArray) {
		danmaku.x -= danmaku.speed;

		if (danmaku.x < -(danmaku.widthCached)) {
			resetDanmaku(danmaku);
		}
		else {
			danmaku.p.style.transform = `translateX(${danmaku.x}px)`;
		}
	}

	requestAnimationFrame(danmakuAnimate);
}

let danmakuArray = createDanmakuRows();

function init() {
	const popup = createPopup();

	function onKey(e) {
		if (e.code === 'Space' || e.code === 'Enter') {
			popup.remove();
			window.removeEventListener('keydown', onKey);

			animationStart();
		}
	}

	window.addEventListener('keydown', onKey);
};

function animationStart() {
	requestAnimationFrame(danmakuAnimate);

	addEventListener('resize', () => {
		danmakuContainer.innerHTML = '';

		danmakuArray = createDanmakuRows();

		requestAnimationFrame(danmakuAnimate);
	});
}

function createPopup() {
	const popup = document.createElement('div');
	popup.style.position = 'fixed';
	popup.style.top = '50%';
	popup.style.left = '50%';
	popup.style.transform = 'translate(-50%, -50%)';
	popup.style.background = 'rgba(255, 255, 255, 0.1)';
	popup.style.backdropFilter = 'blur(10px)';
	popup.style.webkitBackdropFilter = 'blur(10px)';
	popup.style.borderRadius = '10px';
	popup.style.padding = "10px 10px";
	popup.style.color = 'white';
	popup.style.zIndex = '10000';
	popup.style.whiteSpace = 'pre-wrap';
	popup.style.fontSize = 3 + 'vh';

	popup.textContent =
		`
Hello, Talia!
	Happy birthday!!!🎂🎂🎂🥳🥳🥳
	Wishing u a happy birthday and a joyful year ahead.❤️❤️❤️
	And on a whim, I made this for u. Time was tight, so it may not that perfect, but I hope u will like this special birthday gift.


This is from toto:
	رورووو يا فتاة الميلاد كل عام و انتي بخير يا اختي المفضلة صح عليكي حركات سيئة بس ما بقدر اعيش بدونك بحبك يا تاليا 💋🤭
	`;
	document.body.appendChild(popup);

	return popup;
}

init();