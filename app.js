var c = e => document.getElementById(e),
    s = ["image/jpeg", "image/pjpeg", "image/png"];

function u(e) {
    for (var t = 0; t < s.length; t++)
        if (e.type === s[t]) return !0;
    return !1
}

function h(e) {
    return e < 1024 ? e + "bytes" : e >= 1024 && e < 1048576 ? (e / 1024).toFixed(1) + "KB" : e >= 1048576 ?
        (e / 1048576).toFixed(1) + "MB" : void 0
}

function p(e) {
    return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(e)
}
document.addEventListener("DOMContentLoaded", (function (e) {
    var t, n = c("output"),
        i = c("info"),
        o = c("ref"),
        a = c("save"),
        r = (c("overlay"), c("fullscreen")),
        d = c("container"),
        l = c("rcw"),
        s = c("rccw"),
        h = c("canvas");
    h.width = parseInt(window.getComputedStyle(h.parentNode, null).getPropertyValue("width"));
    var g, f = h.getContext("2d"),
        v = h.style.border,
        y = h.style.borderRadius,
        m = 1,
        w = "",
        b = [],
        x = !1,
        k = 0,
        E = 0,
        L = 1,
        T = "no_image",
        C = new Image;
    C.crossOrigin = "anonymous", C.referrerPolicy = "no-referrer", C.style.display = "none", C
        .onload = function () {
            (g = C.height / C.width) > 1 ? (!0, !1, !1) : g < 1 ? (!1, !0, !1) : (!1, !1, !0), h
                .style.border = "none", h.style.borderRadius = "0", b = [], f.lineWidth = 3,
                q(), l.removeAttribute("disabled"), s.removeAttribute("disabled"), ie(0), a
                .disabled = "", c("filename").innerHTML = T, Q = 0
        }, C.onerror = function (e) {
            if ("" == C.currentSrc) return !1;
            alert("Sorry, this image could not be loaded directly*.\nPlease try copy-paste instead.\n\n*probably due to security measures of the browser and/or server. Also, you can't drop local image files from another browser tab.",
                e)
        };
    let M = !1,
        P = c("expand"),
        D = {
            c: d.style,
            f: r.style
        };

    function S() {
        M = !M, M ? (P.innerHTML =
            'reduce <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize-2"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>',
            r.style =
            "position:absolute; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); padding:0; margin:0;",
            d.style = "position:absolute; top:5%; left:5%; width:90%; height:90%;", h
            .width = parseInt(window.getComputedStyle(h.parentNode, null).getPropertyValue(
                "width")), q(), r.addEventListener("click", S)) : (P.innerHTML =
            'expand <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize-2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>',
            d.style = D.c, r.style = D.f, h.width = parseInt(window.getComputedStyle(h
                .parentNode, null).getPropertyValue("width")), q(), r.removeEventListener(
                "click", S))
    }
    P.addEventListener("click", e => {
        e.stopPropagation(), S()
    }), d.addEventListener("click", e => {
        e.stopPropagation()
    });
    var A = document.getElementsByClassName("loadbutton");
    for (lb of A) lb.addEventListener("click", N);

    function N() {
        var e = document.createElement("input");
        e.type = "file", e.accept = ".jpg, .jpeg, .png", e.addEventListener("change", (
            function () {
                var t = e.files;
                if (0 === t.length);
                else
                    for (var n = 0; n < t.length; n++)
                        if (u(t[n])) {
                            T = t[n].name, C.src = window.URL.createObjectURL(t[n]);
                            break
                        }
            })), e.click()
    }
    document.body.ondragover = function (e) {
        e.preventDefault()
    }, document.body.ondrop = function (e) {
        if (e.stopPropagation(), e.preventDefault(), e.dataTransfer.files.length) {
            for (var t, n = e.dataTransfer.files, i = 0; t = n[i]; i++)
                if (t.type.match("image.*")) {
                    var o = new FileReader;
                    o.onload = function (e) {
                        C.src = e.target.result
                    }, o.readAsDataURL(t), T = t.name;
                    break
                }
        } else {
            var a = e.dataTransfer.getData("text");
            p(a) && (C.src = a)
        }
    };
    var R = 0;
    l.addEventListener("click", (function (e) {
        R += 90, $()
    })), s.addEventListener("click", (function (e) {
        R -= 90, $()
    }));
    var H = !1;
    window.addEventListener("keydown", (function (e) {
        e.repeat || "Control" != e.key || (H = !0)
    })), window.addEventListener("keyup", (function (e) {
        e.repeat || "Control" != e.key || (H = !1)
    }));
    let B = document.getElementsByTagName("kbd");
    var I, j = !1;
    for (let e of B) {
        let t = e.dataset.key;
        e.onclick = function () {
            let n;
            if ("Control" == t) !0 === j ? (n = new KeyboardEvent("keyup", {
                bubbles: !0,
                cancelable: !0,
                key: "Control",
                ctrlKey: !0
            }), j = !1, e.removeAttribute("class")) : (n = new KeyboardEvent(
                "keydown", {
                    bubbles: !0,
                    cancelable: !0,
                    key: "Control",
                    ctrlKey: !0
                }), j = !0, e.setAttribute("class", "pressed"));
            else if ("Delete" == t) n = new KeyboardEvent("keydown", {
                bubbles: !0,
                cancelable: !0,
                key: "Delete",
                ctrlKey: !1
            });
            else {
                if ("Escape" != t) return;
                n = new KeyboardEvent("keydown", {
                    bubbles: !0,
                    cancelable: !0,
                    key: "Escape",
                    ctrlKey: !1
                })
            }
            document.dispatchEvent(n)
        }
    }
    var K = !1;

    function F(e) {
        I = void 0, K = !0, e.preventDefault(), e.stopPropagation(), window.navigator.vibrate([
            50
        ]), W(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
    }

    function W(e, t) {
        x = !0;
        var n = h.getBoundingClientRect();
        k = (e - n.left) / n.width, E = (t - n.top) / n.height
    }

    function X(e, t) {
        var n = h.getBoundingClientRect(),
            i = (e - n.left) / n.width,
            o = (t - n.top) / n.height;
        $(), b.length ? f.strokeStyle = "rgba(0, 255, 0, 1)" : f.strokeStyle =
            "rgba(255, 0, 0, 1)", f.lineWidth = 1, f.beginPath(), f.moveTo(k * n.width, E * n
                .height);
        H && (Math.abs(k * n.width - i * n.width) <= 10 ? i = k : Math.abs(E * n.height - o * n
            .height) <= 10 && (o = E)), f.lineTo(i * n.width, o * n.height), f.stroke()
    }

    function Y(e, t) {
        x = !1;
        var n = h.getBoundingClientRect(),
            i = (e - n.left) / n.width,
            o = (t - n.top) / n.height;
        if (k != i || E != o) {
            H && (Math.abs(k * n.width - i * n.width) <= 10 ? i = k : Math.abs(E * n.height -
                o * n.height) <= 10 && (o = E)), b.push({
                x1: k,
                y1: E,
                x2: i,
                y2: o
            }), q()
        }
    }
    h.addEventListener("touchstart", (function (e) {
        I = window.setTimeout(F, 500, e)
    })), h.addEventListener("touchmove", (function (e) {
        I ? window.clearTimeout(I) : K && (e.preventDefault(), e.stopPropagation(),
            X(e.changedTouches[0].clientX, e.changedTouches[0].clientY))
    })), h.addEventListener("touchend", (function (e) {
        I ? window.clearTimeout(I) : K && (e.preventDefault(), K = !1, Y(e
            .changedTouches[0].clientX, e.changedTouches[0].clientY))
    })), h.addEventListener("touchcancel", (function (e) {
        I ? window.clearTimeout(I) : K && (K = !1)
    })), h.addEventListener("click", (function (e) {
        0 == C.naturalWidth && 0 == b.length && N()
    })), h.addEventListener("mousedown", (function (e) {
        return 1 != e.button && x ? (e.stopPropagation(), e.preventDefault(), !1) :
            (e.button, 0 == e.button && (e.stopPropagation(), e.preventDefault(), h
                .oncontextmenu = function () {
                    return !1
                }, void W(e.clientX, e.clientY)))
    })), h.addEventListener("mousemove", (function (e) {
        t = h.getBoundingClientRect();
        var n = e.clientX - t.left,
            i = e.clientY - t.top,
            o = f.getImageData(n, i, 1, 1).data,
            a = "rgba(" + o[0] + "," + o[1] + "," + o[2] + "," + o[3] + ")";
        J(n.toFixed(), i.toFixed(), a), x && (e.stopPropagation(), e
            .preventDefault(), X(e.clientX, e.clientY))
    })), h.addEventListener("mouseup", (function (e) {
        return 0 == e.button && (!!x && (e.stopPropagation(), e.preventDefault(), h
            .oncontextmenu = null, void Y(e.clientX, e.clientY)))
    })), h.addEventListener("mouseout", (function (e) {
        e.stopPropagation(), e.preventDefault(), J("-", "-", "-")
    }));
    var V, O = 0;

    function U(e) {
        return Math.sqrt(Math.pow((e.x1 - e.x2) * h.width, 2) + Math.pow((e.y1 - e.y2) * h
            .height, 2))
    }

    function $() {
        if (0 === C.naturalWidth) f.clearRect(0, 0, f.canvas.width, f.canvas.height);
        else {
            parseInt(window.getComputedStyle(h.parentNode, null).getPropertyValue("width")), h
                .parentNode.offsetWidth;
            (R %= 360) < 0 && (R += 360);
            var e = R * Math.PI / 180,
                t = Math.abs(Math.sin(e)),
                n = Math.abs(Math.cos(e)),
                i = n * C.width + t * C.height,
                o = t * C.width + n * C.height,
                a = h.width / i,
                r = i / o;
            h.height = h.width / r, f.save(), f.setTransform(a, 0, 0, a, h.width / 2, h.height /
                2), f.rotate(e), f.drawImage(C, -C.width / 2, -C.height / 2), f.restore()
        }
        b.length && (L = 1 / U(b[0]) * m), f.lineWidth = 1;
        for (var d = 0; d < b.length; d++) {
            var l;
            f.strokeStyle = d ? "rgba(0, 255, 0, 1)" : "rgba(255, 0, 0, 1)", f.beginPath(), f
                .moveTo(b[d].x1 * h.width, b[d].y1 * h.height), f.lineTo(b[d].x2 * h.width, b[d]
                    .y2 * h.height), f.stroke(), L ? l = U(b[d]) * L : (l = U(b[d]), w = " px");
            var c = d + 1 + "=" + l.toFixed(2) + w;
            f.font = "20px serif", f.textAlign = "center", f.textBaseline = "middle";
            let e = Math.min(b[d].x1, b[d].x2) * h.width + Math.abs((b[d].x1 - b[d].x2) * h
                    .width) / 2,
                t = Math.min(b[d].y1, b[d].y2) * h.height + Math.abs((b[d].y1 - b[d].y2) * h
                    .height) / 2;
            f.strokeStyle = "rgba(255, 255, 255, 0.9)", f.lineWidth = 3, f.strokeText(c, e, t),
                f.fillStyle = "rgba(0, 0, 0, 1)", f.fillText(c, e, t)
        }
    }

    function _() {
        if (b.length) {
            L = 1 / U(b[0]) * m, n.innerHTML = "";
            for (var e = document.createElement("table"), t = b.length, i = 0; i < t; i++) {
                var o, a = e.insertRow(),
                    r = a.insertCell();

                a.classList.add('border-collapse', 'border')
                r.classList.add('border-collapse', 'border')

                r.appendChild(document.createTextNode(i + 1)), L ? o = U(b[i]) * L : (o = U(b[
                        i]), w = " px"), (r = a.insertCell()).appendChild(document
                        .createTextNode(o.toFixed(2) + w)), r.style.textAlign = "right", r = a
                    .insertCell();
                var d = document.createElement("a"),
                    l = document.createTextNode("remove");

                d.appendChild(l), d.href = "", d.onclick = function (e) {
                    return function () {
                        return b.splice(e, 1), q(), !1
                    }
                }(i), r.appendChild(d)
            }
            var c = e.createTHead().insertRow(),
                s = document.createTextNode("#"),
                u = document.createElement("th");
            c.classList.add('border-collapse', 'border');
            u.classList.add('border-collapse', 'border');
            u.appendChild(s), c.appendChild(u), s = document.createTextNode("length"), (u =
                    document.createElement("th")).appendChild(s), c.appendChild(u), s = document
                .createTextNode("-"), (u = document.createElement("th")).appendChild(s), c
                .appendChild(u), n.appendChild(e)
        } else n.innerHTML = "No measurements yet."
    }
    window.addEventListener("keydown", (function (e) {
        e.repeat || "Escape" != e.key || (0 == O ? x || (O = 1, b = [], V = window
            .setTimeout((function () {
                O = 0
            }), 1e3)) : 1 == O && (O = 0, C.src = "", c("filename")
            .innerHTML = "", h.width = parseInt(window.getComputedStyle(h
                .parentNode, null).getPropertyValue("width")), h.height =
            150, h.style.border = v, h.style.borderRadius = y, window
            .clearTimeout(V), l.setAttribute("disabled", ""), s
            .setAttribute("disabled", ""), a.setAttribute("disabled", ""),
            T = "no_image", ie(0)), q(), x = !1, k = 0, E = 0)
    })), window.addEventListener("keydown", (function (e) {
        e.repeat || "Delete" != e.key || document.activeElement == o || (x || b
            .pop(), q(), x = !1, k = 0, E = 0)
    }));
    var z = c("outputcsv");

    function G() {
        if (z.innerHTML = "", b.length) {
            L = 1 / U(b[0]) * m;
            for (var e = b.length, t = 0; t < e; t++) {
                var n;
                z.innerHTML += t + 1 + "\t", L ? n = U(b[t]) * L : (n = U(b[t]), w = " px"), z
                    .innerHTML += n.toFixed(2) + w + "\r\n"
            }
        } else z.innerHTML = "No measurements yet."
    }

    function q() {
        $(), _(), G()
    }

    function J(e, t, n) {
        i.textContent = "x=" + e + " y=" + t + " " + n
    }
    o.addEventListener("input", (function (e) {
        var t = e.target.value.match(/(\d+(,|\.)?\d*)(\D*)/),
            n = "";
        w = "", null == t || (n = t[1], w = t[3]), m = parseFloat(n.replace(",",
            ".")), $(), _(), G()
    }));
    var Q = 0;

    function Z(e = ".png", t = "_measure") {
        return T.replace(/\.[^/.]+$/, "") + t + ("0" + Q).slice(-2) + e
    }

    function ee(e, t) {
        var n = document.createElement("a");
        n.href = e, n.setAttribute("download", t);
        var i = document.createEvent("MouseEvents");
        return i.initEvent("click", !1, !0), n.dispatchEvent(i), !1
    }

    function saveCSV(e) {
        navigator.clipboard ? navigator.clipboard.writeText(e).then((function () {}), (
            function (e) {})) : function (e) {
            var t = document.createElement("textarea");
            t.value = e, t.style.top = "0", t.style.left = "0", t.style.position = "fixed",
                document.body.appendChild(t), t.focus(), t.select();
            try {
                document.execCommand("copy")
            } catch (e) {}
            document.body.removeChild(t)
        }(e)
    }
    a.addEventListener("click", (function (e) {
        ee(h.toDataURL("image/png"), Z()), ie()
    })), c("csv_copy").addEventListener("click", (function () {
        saveCSV(z.textContent)
    }));
    var ne = c("csv_save");

    function ie(e) {
        void 0 !== e ? Q = e : Q++, a.value = "Save as '" + Z() + "'", ne.value = "Save as '" +
            Z(ext = ".txt") + "'"
    }
    ne.addEventListener("click", (function (e) {
        ee("data:," + encodeURIComponent(z.textContent), Z(ext = ".txt")), ie()
    }))
}))