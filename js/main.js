// 맨위로 가기 버튼기능
const backToTop = () => {
	// Scroll | button show/hide
	window.addEventListener("scroll", () => {
		if (document.querySelector("html").scrollTop > 100) {
			document.getElementById("go-top").style.display = "block";
		} else {
			document.getElementById("go-top").style.display = "none";
		}
	});
	// back to top
	document.getElementById("go-top").addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	});
};
backToTop();

// 텍스트 효과기능

const content = "THIS IS JAVASCRIPT EFFECT";
const text = document.querySelector(".text");
let index = 0;

function typing() {
	text.textContent += content[index++];
	if (index > content.length) {
		text.textContent = "";
		index = 0;
	}
}
setInterval(typing, 100);

// 제이쿼리를 사용해서 페이지 첫화면에 로딩바 노출후 2초후에 fadeOut
$(function () {
	$(".open_page, .loader").delay(2000).fadeOut();
});
