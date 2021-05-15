export function buildVec2(x: string, y: string) {
  return `<span class="inline-block" style="transform:scale(1,2.1)">(</span><div class="inline-block align-middle text-center mx-0.5"><div>${x}</div><div>${y}</div></div><span class="inline-block" style="transform:scale(1,2.1)">)</span>`
}

export function buildVec(x: string) {
  return `<span class="inline-block relative mr-0.5"><div class="absolute -top-0.5 left-0 right-0"><div class="flex justify-end">${rightarrow}</div></div><div>${x}</div></span>`
}

export function buildFrac(x: string, y: string) {
  return `<div class="frac"><span>${x}</span><span>${y}</span></div>`
}

export function buildImg(src: string) {
  return `<img class="p-3 pt-8" src="${src}" />`
}

export function buildOverline(x: string) {
  return `<span class="overline">${x}</span>`
}

export function buildSqrt(x: string) {
  return `<span class="text-xl">&Sqrt;</span>${buildOverline(x)}`
}

const rightarrow = `
<svg height="0.522em" viewBox="0 0 400000 522" preserveAspectRatio="xMaxYMin slice">
  <path d="M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z">
  </path>
</svg>`
