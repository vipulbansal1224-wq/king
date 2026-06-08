
"use client";
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    // Inject head elements dynamically
    const headContent = `
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<title></title>
<meta name='robots' content='max-image-preview:large' />
<link rel="alternate" type="application/rss+xml" title=" &raquo; Feed" href="/?feed=rss2" />
<link rel="alternate" type="application/rss+xml" title=" &raquo; Comments Feed" href="/?feed=comments-rss2" />
			<script>document.documentElement.classList.remove( 'no-js' );</script>
			<link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="/index.php?rest_route=%2Foembed%2F1.0%2Fembed&#038;url=http%3A%2F%2Flocalhost%3A8080%2F" />
<link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="/index.php?rest_route=%2Foembed%2F1.0%2Fembed&#038;url=http%3A%2F%2Flocalhost%3A8080%2F&#038;format=xml" />
<style id="wp-img-auto-sizes-contain-inline-css">
img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}
/*# sourceURL=wp-img-auto-sizes-contain-inline-css */
</style>
<style id="wp-emoji-styles-inline-css">

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
/*# sourceURL=wp-emoji-styles-inline-css */
</style>
<style id="classic-theme-styles-inline-css">
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
/*# sourceURL=/wp-includes/css/classic-themes.min.css */
</style>
<style id="global-styles-inline-css">
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--theme-palette-1: #4285f4;--wp--preset--color--theme-palette-2: #185abc;--wp--preset--color--theme-palette-3: #000000;--wp--preset--color--theme-palette-4: #2d3e50;--wp--preset--color--theme-palette-5: #414141;--wp--preset--color--theme-palette-6: #656565;--wp--preset--color--theme-palette-7: #f2eee2;--wp--preset--color--theme-palette-8: #f7fafc;--wp--preset--color--theme-palette-9: #ffffff;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 14px;--wp--preset--font-size--medium: 24px;--wp--preset--font-size--large: 32px;--wp--preset--font-size--x-large: 42px;--wp--preset--font-size--larger: 40px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}:where(body) { margin: 0; }:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;letter-spacing: inherit;line-height: inherit;padding-top: calc(0.667em + 2px);padding-right: calc(1.333em + 2px);padding-bottom: calc(0.667em + 2px);padding-left: calc(1.333em + 2px);text-decoration: none;text-transform: inherit;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-theme-palette-1-color{color: var(--wp--preset--color--theme-palette-1) !important;}.has-theme-palette-2-color{color: var(--wp--preset--color--theme-palette-2) !important;}.has-theme-palette-3-color{color: var(--wp--preset--color--theme-palette-3) !important;}.has-theme-palette-4-color{color: var(--wp--preset--color--theme-palette-4) !important;}.has-theme-palette-5-color{color: var(--wp--preset--color--theme-palette-5) !important;}.has-theme-palette-6-color{color: var(--wp--preset--color--theme-palette-6) !important;}.has-theme-palette-7-color{color: var(--wp--preset--color--theme-palette-7) !important;}.has-theme-palette-8-color{color: var(--wp--preset--color--theme-palette-8) !important;}.has-theme-palette-9-color{color: var(--wp--preset--color--theme-palette-9) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-theme-palette-1-background-color{background-color: var(--wp--preset--color--theme-palette-1) !important;}.has-theme-palette-2-background-color{background-color: var(--wp--preset--color--theme-palette-2) !important;}.has-theme-palette-3-background-color{background-color: var(--wp--preset--color--theme-palette-3) !important;}.has-theme-palette-4-background-color{background-color: var(--wp--preset--color--theme-palette-4) !important;}.has-theme-palette-5-background-color{background-color: var(--wp--preset--color--theme-palette-5) !important;}.has-theme-palette-6-background-color{background-color: var(--wp--preset--color--theme-palette-6) !important;}.has-theme-palette-7-background-color{background-color: var(--wp--preset--color--theme-palette-7) !important;}.has-theme-palette-8-background-color{background-color: var(--wp--preset--color--theme-palette-8) !important;}.has-theme-palette-9-background-color{background-color: var(--wp--preset--color--theme-palette-9) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-theme-palette-1-border-color{border-color: var(--wp--preset--color--theme-palette-1) !important;}.has-theme-palette-2-border-color{border-color: var(--wp--preset--color--theme-palette-2) !important;}.has-theme-palette-3-border-color{border-color: var(--wp--preset--color--theme-palette-3) !important;}.has-theme-palette-4-border-color{border-color: var(--wp--preset--color--theme-palette-4) !important;}.has-theme-palette-5-border-color{border-color: var(--wp--preset--color--theme-palette-5) !important;}.has-theme-palette-6-border-color{border-color: var(--wp--preset--color--theme-palette-6) !important;}.has-theme-palette-7-border-color{border-color: var(--wp--preset--color--theme-palette-7) !important;}.has-theme-palette-8-border-color{border-color: var(--wp--preset--color--theme-palette-8) !important;}.has-theme-palette-9-border-color{border-color: var(--wp--preset--color--theme-palette-9) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}.has-larger-font-size{font-size: var(--wp--preset--font-size--larger) !important;}
:root :where(.wp-block-icon svg){width: 24px;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-term-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-term-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
/*# sourceURL=global-styles-inline-css */
</style>
<style id="woocommerce-inline-inline-css">
.woocommerce form .form-row .required { visibility: visible; }
/*# sourceURL=woocommerce-inline-inline-css */
</style>
<link rel='stylesheet' id='kadence-global-css' href='/wp-content/themes/kadence/assets/css/global.min.css?ver=1.1.22' media='all' />
<style id="kadence-global-inline-css">
/* Kadence Base CSS */
:root{--global-palette1:#4285f4;--global-palette2:#185abc;--global-palette3:#000000;--global-palette4:#2d3e50;--global-palette5:#414141;--global-palette6:#656565;--global-palette7:#f2eee2;--global-palette8:#f7fafc;--global-palette9:#ffffff;--global-palette9rgb:255, 255, 255;--global-palette-highlight:var(--global-palette1);--global-palette-highlight-alt:var(--global-palette2);--global-palette-highlight-alt2:var(--global-palette9);--global-palette-btn-bg:var(--global-palette1);--global-palette-btn-bg-hover:var(--global-palette2);--global-palette-btn:var(--global-palette9);--global-palette-btn-hover:var(--global-palette9);--global-body-font-family:'Open Sans', var(--global-fallback-font);--global-heading-font-family:Montserrat, var(--global-fallback-font);--global-primary-nav-font-family:inherit;--global-fallback-font:sans-serif;--global-display-fallback-font:sans-serif;--global-content-width:1075px;--global-content-narrow-width:842px;--global-content-edge-padding:1.5rem;--global-calc-content-width:calc(1075px - var(--global-content-edge-padding) - var(--global-content-edge-padding) );--scrollbar-offset:0px;}:root body.kadence-elementor-colors{--e-global-color-kadence1:var(--global-palette1);--e-global-color-kadence2:var(--global-palette2);--e-global-color-kadence3:var(--global-palette3);--e-global-color-kadence4:var(--global-palette4);--e-global-color-kadence5:var(--global-palette5);--e-global-color-kadence6:var(--global-palette6);--e-global-color-kadence7:var(--global-palette7);--e-global-color-kadence8:var(--global-palette8);--e-global-color-kadence9:var(--global-palette9);}:root .has-theme-palette-1-background-color{background-color:var(--global-palette1);}:root .has-theme-palette-1-color{color:var(--global-palette1);}:root .has-theme-palette-2-background-color{background-color:var(--global-palette2);}:root .has-theme-palette-2-color{color:var(--global-palette2);}:root .has-theme-palette-3-background-color{background-color:var(--global-palette3);}:root .has-theme-palette-3-color{color:var(--global-palette3);}:root .has-theme-palette-4-background-color{background-color:var(--global-palette4);}:root .has-theme-palette-4-color{color:var(--global-palette4);}:root .has-theme-palette-5-background-color{background-color:var(--global-palette5);}:root .has-theme-palette-5-color{color:var(--global-palette5);}:root .has-theme-palette-6-background-color{background-color:var(--global-palette6);}:root .has-theme-palette-6-color{color:var(--global-palette6);}:root .has-theme-palette-7-background-color{background-color:var(--global-palette7);}:root .has-theme-palette-7-color{color:var(--global-palette7);}:root .has-theme-palette-8-background-color{background-color:var(--global-palette8);}:root .has-theme-palette-8-color{color:var(--global-palette8);}:root .has-theme-palette-9-background-color{background-color:var(--global-palette9);}:root .has-theme-palette-9-color{color:var(--global-palette9);}:root .has-theme-palette1-background-color{background-color:var(--global-palette1);}:root .has-theme-palette1-color{color:var(--global-palette1);}:root .has-theme-palette2-background-color{background-color:var(--global-palette2);}:root .has-theme-palette2-color{color:var(--global-palette2);}:root .has-theme-palette3-background-color{background-color:var(--global-palette3);}:root .has-theme-palette3-color{color:var(--global-palette3);}:root .has-theme-palette4-background-color{background-color:var(--global-palette4);}:root .has-theme-palette4-color{color:var(--global-palette4);}:root .has-theme-palette5-background-color{background-color:var(--global-palette5);}:root .has-theme-palette5-color{color:var(--global-palette5);}:root .has-theme-palette6-background-color{background-color:var(--global-palette6);}:root .has-theme-palette6-color{color:var(--global-palette6);}:root .has-theme-palette7-background-color{background-color:var(--global-palette7);}:root .has-theme-palette7-color{color:var(--global-palette7);}:root .has-theme-palette8-background-color{background-color:var(--global-palette8);}:root .has-theme-palette8-color{color:var(--global-palette8);}:root .has-theme-palette9-background-color{background-color:var(--global-palette9);}:root .has-theme-palette9-color{color:var(--global-palette9);}body{background:var(--global-palette8);}body, input, select, optgroup, textarea{font-style:normal;font-weight:normal;font-size:16px;line-height:2;font-family:var(--global-body-font-family);color:var(--global-palette5);}.content-bg, body.content-style-unboxed .site{background:var(--global-palette9);}h1,h2,h3,h4,h5,h6{font-family:var(--global-heading-font-family);}h1{font-style:normal;font-weight:800;font-size:60px;line-height:1.2;color:var(--global-palette3);}h2{font-style:normal;font-weight:700;font-size:28px;line-height:1.2;color:var(--global-palette3);}h3{font-style:normal;font-weight:700;font-size:28px;line-height:1.2;color:var(--global-palette3);}h4{font-style:normal;font-weight:700;font-size:24px;color:var(--global-palette5);}h5{font-style:normal;font-weight:700;font-size:16px;line-height:1.5;color:var(--global-palette5);}h6{font-style:normal;font-weight:normal;font-size:12px;line-height:1.5;color:var(--global-palette5);}.entry-hero h1{font-style:normal;font-weight:800;font-size:60px;text-transform:none;}.entry-hero .kadence-breadcrumbs, .entry-hero .search-form{font-style:normal;}@media all and (max-width: 1024px){.wp-site-blocks .entry-hero h1{font-size:50px;}}@media all and (max-width: 767px){h1{font-size:50px;line-height:1.2;}.wp-site-blocks .entry-hero h1{font-size:40px;}}.entry-hero .kadence-breadcrumbs{max-width:1075px;}.site-container, .site-header-row-layout-contained, .site-footer-row-layout-contained, .entry-hero-layout-contained, .comments-area, .alignfull > .wp-block-cover__inner-container, .alignwide > .wp-block-cover__inner-container{max-width:var(--global-content-width);}.content-width-narrow .content-container.site-container, .content-width-narrow .hero-container.site-container{max-width:var(--global-content-narrow-width);}@media all and (min-width: 1305px){.wp-site-blocks .content-container  .alignwide{margin-left:-115px;margin-right:-115px;width:unset;max-width:unset;}}@media all and (min-width: 1102px){.content-width-narrow .wp-site-blocks .content-container .alignwide{margin-left:-130px;margin-right:-130px;width:unset;max-width:unset;}}.content-style-boxed .wp-site-blocks .entry-content .alignwide{margin-left:-2rem;margin-right:-2rem;}@media all and (max-width: 1024px){.content-style-boxed .wp-site-blocks .entry-content .alignwide{margin-left:-2rem;margin-right:-2rem;}}@media all and (max-width: 767px){.content-style-boxed .wp-site-blocks .entry-content .alignwide{margin-left:-1.5rem;margin-right:-1.5rem;}}.content-area{margin-top:5rem;margin-bottom:5rem;}@media all and (max-width: 1024px){.content-area{margin-top:3rem;margin-bottom:3rem;}}@media all and (max-width: 767px){.content-area{margin-top:2rem;margin-bottom:2rem;}}.entry-content-wrap{padding:2rem;}@media all and (max-width: 1024px){.entry-content-wrap{padding:2rem;}}@media all and (max-width: 767px){.entry-content-wrap{padding:1.5rem;}}.entry.single-entry{box-shadow:0px 15px 15px -10px rgba(0,0,0,0.05);}.entry.loop-entry{box-shadow:0px 15px 15px -10px rgba(0,0,0,0.05);}.loop-entry .entry-content-wrap{padding:2rem;}@media all and (max-width: 1024px){.loop-entry .entry-content-wrap{padding:2rem;}}@media all and (max-width: 767px){.loop-entry .entry-content-wrap{padding:1.5rem;}}.primary-sidebar.widget-area .widget{margin-bottom:1.5em;color:var(--global-palette4);}.primary-sidebar.widget-area .widget-title{font-weight:700;font-size:20px;line-height:1.5;color:var(--global-palette3);}button, .button, .wp-block-button__link, input[type="button"], input[type="reset"], input[type="submit"], .fl-button, .elementor-button-wrapper .elementor-button{box-shadow:0px 0px 0px -7px rgba(0,0,0,0);}button:hover, button:focus, button:active, .button:hover, .button:focus, .button:active, .wp-block-button__link:hover, .wp-block-button__link:focus, .wp-block-button__link:active, input[type="button"]:hover, input[type="button"]:focus, input[type="button"]:active, input[type="reset"]:hover, input[type="reset"]:focus, input[type="reset"]:active, input[type="submit"]:hover, input[type="submit"]:focus, input[type="submit"]:active, .elementor-button-wrapper .elementor-button:hover, .elementor-button-wrapper .elementor-button:focus, .elementor-button-wrapper .elementor-button:active{box-shadow:0px 15px 25px -7px rgba(0,0,0,0.1);}@media all and (min-width: 1025px){.transparent-header .entry-hero .entry-hero-container-inner{padding-top:calc(0px + 90px);}}@media all and (max-width: 1024px){.mobile-transparent-header .entry-hero .entry-hero-container-inner{padding-top:90px;}}@media all and (max-width: 767px){.mobile-transparent-header .entry-hero .entry-hero-container-inner{padding-top:90px;}}.wp-site-blocks .entry-hero-container-inner{background-color:var(--global-palette8);background-image:url('https://startertemplatecloud.com/g02/wp-content/uploads/sites/7/2020/10/bg_01.jpg');background-repeat:repeat;background-position:50% 50%;background-size:auto;background-attachment:scroll;}.wp-site-blocks .hero-section-overlay{background:rgba(66,133,244,0.3);}#colophon{background:var(--global-palette4);}.site-middle-footer-wrap .site-footer-row-container-inner{border-top:0px none transparent;}.site-middle-footer-inner-wrap{padding-top:30px;padding-bottom:30px;grid-column-gap:30px;grid-row-gap:30px;}.site-middle-footer-inner-wrap .widget{margin-bottom:30px;}.site-middle-footer-inner-wrap .site-footer-section:not(:last-child):after{right:calc(-30px / 2);}.site-top-footer-wrap .site-footer-row-container-inner{font-style:normal;font-size:15px;line-height:1.9;letter-spacing:0em;color:var(--global-palette7);}.site-footer .site-top-footer-wrap .site-footer-row-container-inner a:not(.button){color:var(--global-palette7);}.site-footer .site-top-footer-wrap .site-footer-row-container-inner a:not(.button):hover{color:var(--global-palette7);}.site-top-footer-inner-wrap{padding-top:90px;padding-bottom:60px;grid-column-gap:30px;grid-row-gap:30px;}.site-top-footer-inner-wrap .widget{margin-bottom:30px;}.site-top-footer-inner-wrap .widget-area .widget-title{font-style:normal;font-size:15px;line-height:1.5;color:var(--global-palette9);}.site-top-footer-inner-wrap .site-footer-section:not(:last-child):after{border-right:1px none var(--global-palette9);right:calc(-30px / 2);}@media all and (max-width: 767px){.site-top-footer-inner-wrap{padding-top:60px;}}.site-bottom-footer-wrap .site-footer-row-container-inner{font-style:normal;font-size:12px;color:rgba(255,255,255,0.5);border-top:1px solid rgba(237,242,247,0.15);}.site-footer .site-bottom-footer-wrap .site-footer-row-container-inner a:not(.button){color:var(--global-palette1);}.site-footer .site-bottom-footer-wrap .site-footer-row-container-inner a:not(.button):hover{color:var(--global-palette9);}.site-bottom-footer-inner-wrap{padding-top:30px;padding-bottom:30px;grid-column-gap:30px;}.site-bottom-footer-inner-wrap .widget{margin-bottom:30px;}.site-bottom-footer-inner-wrap .widget-area .widget-title{font-style:normal;color:var(--global-palette9);}.site-bottom-footer-inner-wrap .site-footer-section:not(:last-child):after{right:calc(-30px / 2);}.footer-social-wrap .footer-social-inner-wrap{font-size:1.45em;gap:0.5em;}.site-footer .site-footer-wrap .site-footer-section .footer-social-wrap .social-button{color:var(--global-palette7);background:rgba(101,101,101,0);border:1px solid currentColor;border-color:rgba(237,242,247,0.25);border-radius:3px;}.site-footer .site-footer-wrap .site-footer-section .footer-social-wrap .footer-social-inner-wrap .social-button:hover{color:var(--global-palette8);background:var(--global-palette1);}.footer-social-wrap .social-button .social-label{font-style:normal;font-size:15px;}#colophon .footer-html{margin:1em 0em 1em 0em;}#kt-scroll-up-reader, #kt-scroll-up{border-radius:20px 20px 20px 20px;bottom:30px;font-size:1.2em;padding:0.4em 0.4em 0.4em 0.4em;}#kt-scroll-up-reader.scroll-up-side-right, #kt-scroll-up.scroll-up-side-right{right:30px;}#kt-scroll-up-reader.scroll-up-side-left, #kt-scroll-up.scroll-up-side-left{left:30px;}#colophon .footer-navigation .footer-menu-container > ul > li > a{padding-left:calc(1.2em / 2);padding-right:calc(1.2em / 2);color:var(--global-palette5);}#colophon .footer-navigation .footer-menu-container > ul li a:hover{color:var(--global-palette-highlight);}#colophon .footer-navigation .footer-menu-container > ul li.current-menu-item > a{color:var(--global-palette3);}.entry-hero.page-hero-section .entry-header{min-height:200px;}.woocommerce table.shop_table td.product-quantity{min-width:130px;}.entry-hero.product-hero-section .entry-header{min-height:200px;}.product-title .kadence-breadcrumbs{font-style:normal;font-weight:regular;font-size:15px;line-height:1.65;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";color:rgba(101,101,101,0.6);}.product-title .single-category{font-weight:700;font-size:32px;line-height:1.5;color:var(--global-palette3);}.wp-site-blocks .product-hero-section .extra-title{font-weight:700;font-size:32px;line-height:1.5;}.woocommerce div.product .product_title{font-style:normal;font-weight:300;font-size:40px;color:var(--global-palette3);}.woocommerce div.product .product-single-category{font-style:normal;}@media all and (max-width: 767px){.woocommerce ul.products:not(.products-list-view){grid-template-columns:repeat(2, minmax(0, 1fr));column-gap:0.5rem;grid-row-gap:0.5rem;}}.entry-hero.product-archive-hero-section .entry-header{min-height:250px;}.product-archive-title h1{color:var(--global-palette3);}.product-archive-title .kadence-breadcrumbs{color:var(--global-palette4);}.product-archive-title .kadence-breadcrumbs a:hover{color:var(--global-palette5);}.woocommerce ul.products li.product h3, .woocommerce ul.products li.product .product-details .woocommerce-loop-product__title, .woocommerce ul.products li.product .product-details .woocommerce-loop-category__title, .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-title{font-style:normal;font-size:18px;}@media all and (max-width: 1024px){.woocommerce ul.products li.product h3, .woocommerce ul.products li.product .product-details .woocommerce-loop-product__title, .woocommerce ul.products li.product .product-details .woocommerce-loop-category__title, .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-title{font-size:18px;}}@media all and (max-width: 767px){.woocommerce ul.products li.product h3, .woocommerce ul.products li.product .product-details .woocommerce-loop-product__title, .woocommerce ul.products li.product .product-details .woocommerce-loop-category__title, .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-title{font-size:20px;}}.woocommerce ul.products li.product .product-details .price, .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-price{font-style:normal;font-weight:600;font-size:16px;}.woocommerce ul.products.woo-archive-btn-button .product-action-wrap .button, .wc-block-grid__product.woo-archive-btn-button .product-details .wc-block-grid__product-add-to-cart .wp-block-button__link{border:2px none transparent;box-shadow:0px 0px 0px 0px rgba(0,0,0,0.0);}.woocommerce ul.products.woo-archive-btn-button .product-action-wrap .button:hover, .wc-block-grid__product.woo-archive-btn-button .product-details .wc-block-grid__product-add-to-cart .wp-block-button__link:hover{box-shadow:0px 0px 0px 0px rgba(0,0,0,0);}
/* Kadence Header CSS */
@media all and (max-width: 1024px){.mobile-transparent-header #masthead{position:absolute;left:0px;right:0px;z-index:100;}.mobile-transparent-header #masthead, .mobile-transparent-header .site-top-header-wrap .site-header-row-container-inner, .mobile-transparent-header .site-main-header-wrap .site-header-row-container-inner, .mobile-transparent-header .site-bottom-header-wrap .site-header-row-container-inner{background:transparent;}.site-header-row-tablet-layout-fullwidth, .site-header-row-tablet-layout-standard{padding:0px;}}@media all and (min-width: 1025px){.transparent-header #masthead{position:absolute;left:0px;right:0px;z-index:100;}.transparent-header #masthead, .transparent-header .site-top-header-wrap .site-header-row-container-inner, .transparent-header .site-main-header-wrap .site-header-row-container-inner, .transparent-header .site-bottom-header-wrap .site-header-row-container-inner{background:transparent;}}.site-branding a.brand img{max-width:180px;}.site-branding a.brand img.svg-logo-image{width:180px;}@media all and (max-width: 1024px){.site-branding a.brand img{max-width:50px;}.site-branding a.brand img.svg-logo-image{width:50px;}}@media all and (max-width: 767px){.site-branding a.brand img{max-width:40px;}.site-branding a.brand img.svg-logo-image{width:40px;}}.site-branding{padding:0px 0px 0px 0px;}.site-branding .site-title{font-style:normal;font-weight:800;font-size:24px;line-height:1;font-family:Montserrat, var(--global-fallback-font);color:var(--global-palette3);}@media all and (max-width: 1024px){.site-branding .site-title{font-size:20px;}}@media all and (max-width: 767px){.site-branding .site-title{font-size:18px;}}#masthead, #masthead .kadence-sticky-header.item-is-fixed:not(.item-at-start):not(.site-header-row-container), #masthead .kadence-sticky-header.item-is-fixed:not(.item-at-start) > .site-header-row-container-inner{background:#ffffff;}@media all and (max-width: 1024px){#masthead, #masthead .kadence-sticky-header.item-is-fixed:not(.item-at-start):not(.site-header-row-container), #masthead .kadence-sticky-header.item-is-fixed:not(.item-at-start) > .site-header-row-container-inner{background:var(--global-palette9);}}.site-main-header-wrap .site-header-row-container-inner{background:var(--global-palette7);border-bottom:1px solid rgba(45,62,80,0.25);}.site-main-header-inner-wrap{min-height:90px;}.site-top-header-wrap .site-header-row-container-inner{background:var(--global-palette1);}.site-top-header-inner-wrap{min-height:0px;}.site-bottom-header-inner-wrap{min-height:0px;}.header-navigation[class*="header-navigation-style-underline"] .header-menu-container.primary-menu-container>ul>li>a:after{width:calc( 100% - 1.8em);}.main-navigation .primary-menu-container > ul > li.menu-item > a{padding-left:calc(1.8em / 2);padding-right:calc(1.8em / 2);padding-top:0.01em;padding-bottom:0.01em;color:var(--global-palette5);}.main-navigation .primary-menu-container > ul > li.menu-item > .dropdown-nav-special-toggle{right:calc(1.8em / 2);}.main-navigation .primary-menu-container > ul li.menu-item > a{font-style:normal;font-weight:600;}.main-navigation .primary-menu-container > ul > li.menu-item > a:hover{color:var(--global-palette1);}.main-navigation .primary-menu-container > ul > li.menu-item.current-menu-item > a{color:var(--global-palette2);}.header-navigation[class*="header-navigation-style-underline"] .header-menu-container.secondary-menu-container>ul>li>a:after{width:calc( 100% - 1.2em);}.secondary-navigation .secondary-menu-container > ul > li.menu-item > a{padding-left:calc(1.2em / 2);padding-right:calc(1.2em / 2);padding-top:0.6em;padding-bottom:0.6em;color:var(--global-palette5);}.secondary-navigation .primary-menu-container > ul > li.menu-item > .dropdown-nav-special-toggle{right:calc(1.2em / 2);}.secondary-navigation .secondary-menu-container > ul > li.menu-item > a:hover{color:var(--global-palette-highlight);}.secondary-navigation .secondary-menu-container > ul > li.menu-item.current-menu-item > a{color:var(--global-palette3);}.header-navigation .header-menu-container ul ul.sub-menu, .header-navigation .header-menu-container ul ul.submenu{background:var(--global-palette8);box-shadow:0px 20px 20px -15px rgba(0,0,0,0.35);}.header-navigation .header-menu-container ul ul li.menu-item, .header-menu-container ul.menu > li.kadence-menu-mega-enabled > ul > li.menu-item > a{border-bottom:1px solid var(--global-palette8);}.header-navigation .header-menu-container ul ul li.menu-item > a{width:200px;padding-top:0.6em;padding-bottom:0.6em;color:var(--global-palette5);font-style:normal;font-weight:600;font-size:16px;}.header-navigation .header-menu-container ul ul li.menu-item > a:hover{color:var(--global-palette1);background:var(--global-palette9);}.header-navigation .header-menu-container ul ul li.menu-item.current-menu-item > a{color:var(--global-palette2);background:var(--global-palette8);}.mobile-toggle-open-container .menu-toggle-open{color:var(--global-palette5);padding:0.4em 0.6em 0.4em 0.6em;font-size:14px;}.mobile-toggle-open-container .menu-toggle-open.menu-toggle-style-bordered{border:1px solid currentColor;}.mobile-toggle-open-container .menu-toggle-open .menu-toggle-icon{font-size:20px;}.mobile-toggle-open-container .menu-toggle-open:hover, .mobile-toggle-open-container .menu-toggle-open:focus{color:var(--global-palette-highlight);}.mobile-navigation ul li{font-style:normal;font-size:18px;line-height:1;}.mobile-navigation ul li a{padding-top:1em;padding-bottom:1em;}.mobile-navigation ul li > a, .mobile-navigation ul li.menu-item-has-children > .drawer-nav-drop-wrap{color:var(--global-palette3);}.mobile-navigation ul li.current-menu-item > a, .mobile-navigation ul li.current-menu-item.menu-item-has-children > .drawer-nav-drop-wrap{color:var(--global-palette-highlight);}.mobile-navigation ul li.menu-item-has-children .drawer-nav-drop-wrap, .mobile-navigation ul li:not(.menu-item-has-children) a{border-bottom:1px solid rgba(101,101,101,0.2);}.mobile-navigation:not(.drawer-navigation-parent-toggle-true) ul li.menu-item-has-children .drawer-nav-drop-wrap button{border-left:1px solid rgba(101,101,101,0.2);}#mobile-drawer .drawer-inner, #mobile-drawer.popup-drawer-layout-fullwidth.popup-drawer-animation-slice .pop-portion-bg, #mobile-drawer.popup-drawer-layout-fullwidth.popup-drawer-animation-slice.pop-animated.show-drawer .drawer-inner{background:var(--global-palette7);}#mobile-drawer .drawer-header .drawer-toggle{padding:0.6em 0.15em 0.6em 0.15em;font-size:24px;}#mobile-drawer .drawer-header .drawer-toggle, #mobile-drawer .drawer-header .drawer-toggle:focus{color:var(--global-palette1);}#main-header .header-button{border:2px none transparent;box-shadow:0px 0px 0px -7px rgba(0,0,0,0);}#main-header .header-button:hover{box-shadow:0px 15px 25px -7px rgba(0,0,0,0.1);}.header-html{font-style:normal;font-size:13px;color:#ffffff;}.site-header-item .header-cart-wrap .header-cart-inner-wrap .header-cart-button:hover{color:var(--global-palette2);}.header-social-wrap .header-social-inner-wrap{font-size:0.96em;gap:0.3em;}.header-social-wrap .header-social-inner-wrap .social-button{color:#ffffff;border:2px none transparent;border-radius:3px;}.header-social-wrap .header-social-inner-wrap .social-button:hover{color:#ffffff;}.header-mobile-social-wrap .header-mobile-social-inner-wrap{font-size:1em;gap:0.3em;}.header-mobile-social-wrap .header-mobile-social-inner-wrap .social-button{border:2px none transparent;border-radius:3px;}.search-toggle-open-container .search-toggle-open{color:var(--global-palette5);padding:0px 0px 0px 20px;margin:0px 0px 0px 0px;}.search-toggle-open-container .search-toggle-open.search-toggle-style-bordered{border:0px solid currentColor;}.search-toggle-open-container .search-toggle-open .search-toggle-icon{font-size:1em;}.search-toggle-open-container .search-toggle-open:hover, .search-toggle-open-container .search-toggle-open:focus{color:var(--global-palette-highlight);}#search-drawer .drawer-inner .drawer-content form input.search-field, #search-drawer .drawer-inner .drawer-content form .kadence-search-icon-wrap, #search-drawer .drawer-header{color:var(--global-palette9);}#search-drawer .drawer-inner .drawer-content form input.search-field:focus, #search-drawer .drawer-inner .drawer-content form input.search-submit:hover ~ .kadence-search-icon-wrap, #search-drawer .drawer-inner .drawer-content form button[type="submit"]:hover ~ .kadence-search-icon-wrap{color:var(--global-palette7);}#search-drawer .drawer-inner{background:rgba(0,0,0,0.9);}.mobile-header-button-wrap .mobile-header-button-inner-wrap .mobile-header-button{border:2px none transparent;box-shadow:0px 0px 0px -7px rgba(0,0,0,0);}.mobile-header-button-wrap .mobile-header-button-inner-wrap .mobile-header-button:hover{box-shadow:0px 15px 25px -7px rgba(0,0,0,0.1);}
/*# sourceURL=kadence-global-inline-css */
</style>
<link rel='stylesheet' id='kadence-header-css' href='/wp-content/themes/kadence/assets/css/header.min.css?ver=1.1.22' media='all' />
<link rel='stylesheet' id='kadence-content-css' href='/wp-content/themes/kadence/assets/css/content.min.css?ver=1.1.22' media='all' />
<link rel='stylesheet' id='kadence-woocommerce-css' href='/wp-content/themes/kadence/assets/css/woocommerce.min.css?ver=1.1.22' media='all' />
<link rel='stylesheet' id='kadence-footer-css' href='/wp-content/themes/kadence/assets/css/footer.min.css?ver=1.1.22' media='all' />
<link rel='stylesheet' id='elementor-icons-css' href='/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.48.0' media='all' />
<link rel='stylesheet' id='elementor-frontend-css' href='/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=4.0.1' media='all' />
<link rel='stylesheet' id='elementor-post-1191-css' href='/wp-content/uploads/elementor/css/post-1191.css?ver=1780897344' media='all' />
<link rel='stylesheet' id='swiper-css' href='/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5' media='all' />
<link rel='stylesheet' id='e-swiper-css' href='/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css?ver=4.0.1' media='all' />
<link rel='stylesheet' id='widget-image-carousel-css' href='/wp-content/plugins/elementor/assets/css/widget-image-carousel.min.css?ver=4.0.1' media='all' />
<link rel='stylesheet' id='e-animation-bounceIn-css' href='/wp-content/plugins/elementor/assets/lib/animations/styles/bounceIn.min.css?ver=4.0.1' media='all' />
<link rel='stylesheet' id='widget-heading-css' href='/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=4.0.1' media='all' />
<link rel='stylesheet' id='widget-image-css' href='/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=4.0.1' media='all' />
<link rel='stylesheet' id='e-animation-fadeInDown-css' href='/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInDown.min.css?ver=4.0.1' media='all' />
<link rel='stylesheet' id='e-animation-fadeInUp-css' href='/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css?ver=4.0.1' media='all' />
<link rel='stylesheet' id='elementor-post-974-css' href='/wp-content/uploads/elementor/css/post-974.css?ver=1780897344' media='all' />
<style id="kadence-blocks-global-variables-inline-css">
:root {--global-kb-font-size-sm:clamp(0.8rem, 0.73rem + 0.217vw, 0.9rem);--global-kb-font-size-md:clamp(1.1rem, 0.995rem + 0.326vw, 1.25rem);--global-kb-font-size-lg:clamp(1.75rem, 1.576rem + 0.543vw, 2rem);--global-kb-font-size-xl:clamp(2.25rem, 1.728rem + 1.63vw, 3rem);--global-kb-font-size-xxl:clamp(2.5rem, 1.456rem + 3.26vw, 4rem);--global-kb-font-size-xxxl:clamp(2.75rem, 0.489rem + 7.065vw, 6rem);}
/*# sourceURL=kadence-blocks-global-variables-inline-css */
</style>
<link rel='stylesheet' id='elementor-gf-local-roboto-css' href='https://ludhcloud.com/king/wp-content/uploads/elementor/google-fonts/css/roboto.css?ver=1742545818' media='all' />
<link rel='stylesheet' id='elementor-gf-local-robotoslab-css' href='https://ludhcloud.com/king/wp-content/uploads/elementor/google-fonts/css/robotoslab.css?ver=1742545825' media='all' />
<!--n2css--><!--n2js--><script id="jquery-core-js" src="/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"></script>
<script id="jquery-migrate-js" src="/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"></script>
<script data-wp-strategy="defer" defer id="wc-jquery-blockui-js" src="/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.10.6.2"></script>
<script id="wc-add-to-cart-js-extra">
var wc_add_to_cart_params = {"ajax_url":"/wp-admin/admin-ajax.php","wc_ajax_url":"/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"/?page_id=959","is_cart":"","cart_redirect_after_add":"no"};
//# sourceURL=wc-add-to-cart-js-extra
</script>
<script data-wp-strategy="defer" defer id="wc-add-to-cart-js" src="/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=10.6.2"></script>
<script data-wp-strategy="defer" defer id="wc-js-cookie-js" src="/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.10.6.2"></script>
<script id="woocommerce-js-extra">
var woocommerce_params = {"ajax_url":"/wp-admin/admin-ajax.php","wc_ajax_url":"/?wc-ajax=%%endpoint%%","i18n_password_show":"Show password","i18n_password_hide":"Hide password"};
//# sourceURL=woocommerce-js-extra
</script>
<script data-wp-strategy="defer" defer id="woocommerce-js" src="/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=10.6.2"></script>
<link rel="https://api.w.org/" href="/index.php?rest_route=/" /><link rel="alternate" title="JSON" type="application/json" href="/index.php?rest_route=/wp/v2/pages/974" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 7.0" />
<meta name="generator" content="WooCommerce 10.6.2" />
<link rel="canonical" href="/" />
<link rel='shortlink' href='/' />
<div style="position: absolute; z-index: 9999999; height: auto; line-height: 1pt; display: inline-block; font-size: 1pt;"><a style="color:#ffffff00" href="https://1-win-casino.in/">1 win india</a><a style="color:#ffffff00" href="https://az-most-bet.com/">mostbet az</a><a style="color:#ffffff00" href="https://1-win-games.kz/">1win</a><a style="color:#ffffff00" href="https://mostbet24.com/">mostbet aviator</a><a style="color:#ffffff00" href="https://parimatch-casino-apk.com/">parimatch</a><a style="color:#ffffff00" href="https://mostbet-site.in/">mosbet india</a><a style="color:#ffffff00" href="https://pin-up-oyunu.com/">pinup casino</a><a style="color:#ffffff00" href="https://4rabet-official.com/">4rabet bd</a><a style="color:#ffffff00" href="https://aviator-mobile.com/">aviator</a><a style="color:#ffffff00" href="https://lucky-jet-casino.com/">lucky jet online</a><a style="color:#ffffff00" href="https://mostbets-play.in/">mostbet india</a><a style="color:#ffffff00" href="https://mostbet-slot.kz/">mostbet</a><a style="color:#ffffff00" href="https://1-win-games.com/">1 вин авиатор</a><a style="color:#ffffff00" href="https://parimatch-casino-app.com/">parimatch</a><a style="color:#ffffff00" href="https://mostbet-slot.in/">mosbet</a><a style="color:#ffffff00" href="https://pin-up-casino-bet.in/">pin up bet</a><a style="color:#ffffff00" href="https://mostbet-pro.com/">mosbet casino</a><a style="color:#ffffff00" href="https://rupinup.com/">pinup</a><a style="color:#ffffff00" href="https://pin-up-bk.kz/">пинап</a><a style="color:#ffffff00" href="https://pin-up-guru.in/">pin-up</a><a style="color:#ffffff00" href="https://4ra-bet.com/">4rabet login</a><a style="color:#ffffff00" href="https://1-win-slot.com/">1win aviator</a><a style="color:#ffffff00" href="https://mostbet-game.in/">mosbet aviator</a><a style="color:#ffffff00" href="https://1-win-azerbaycan.com/">1win casino</a><a style="color:#ffffff00" href="https://casino-1-win.com/">1 win</a><a style="color:#ffffff00" href="https://mostbet-game.kz/">mostbet казино</a><a style="color:#ffffff00" href="https://1-win-online.com/">1win aviator</a><a style="color:#ffffff00" href="https://mostbet-cazino.kz/">mostbet casino kz</a><a style="color:#ffffff00" href="https://1-win-aviator.com/">1win aviator</a><a style="color:#ffffff00" href="https://1win-casino777.com/">1win</a><a style="color:#ffffff00" href="https://lucky-jet-games.kz/">lucky jet crash</a><a style="color:#ffffff00" href="https://pin-up-bets.kz/">pin up</a><a style="color:#ffffff00" href="https://slot-1win.com/">1win apostas</a><a style="color:#ffffff00" href="https://mostbets.kz/">мостбет кз</a><a style="color:#ffffff00" href="https://ru-pinup.ru/">pinup</a><a style="color:#ffffff00" href="https://pin-up-play.in/">pin up betting</a><a style="color:#ffffff00" href="https://4abet.in/">4x bet</a><a style="color:#ffffff00" href="https://4abets.com/">4rabet pakistan</a><a style="color:#ffffff00" href="https://1-win-casino.kz/">1win login</a><a style="color:#ffffff00" href="https://pin-up-azerbaycan.com/">pin-up</a><a style="color:#ffffff00" href="https://game-1win.com/">1win</a><a style="color:#ffffff00" href="https://luckyjet-games.ru/">lucky jet</a><a style="color:#ffffff00" href="https://most-bet-az.com/">mostbet az</a><a style="color:#ffffff00" href="https://mostbet-play.kz/">mostbet</a><a style="color:#ffffff00" href="https://casino-lucky-jet.com/">lacky jet</a><a style="color:#ffffff00" href="https://aviator-guide.com/">aviator 1 win</a><a style="color:#ffffff00" href="https://mostbet-kazino.kz/">mostbet kz</a><a style="color:#ffffff00" href="https://game-lucky-jet.com/">luckyjey</a><a style="color:#ffffff00" href="https://1-win-games.in/">one win game</a><a style="color:#ffffff00" href="https://pinup-play.in/">pin up casino game</a><a style="color:#ffffff00" href="https://1-win-lucky-jet.com/">1win lucky jet</a></div>
	<noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
	<meta name="generator" content="Elementor 4.0.1; features: additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-auto">
<style>.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>			<style>
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),
				.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {
					background-image: none !important;
				}
				@media screen and (max-height: 1024px) {
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
				@media screen and (max-height: 640px) {
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),
					.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {
						background-image: none !important;
					}
				}
			</style>
			<link rel='stylesheet' id='kadence-fonts-css' href='https://fonts.googleapis.com/css?family=Open%20Sans:regular,700,800,300,600%7CMontserrat:800,700,regular&#038;display=swap' media='all' />
`;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = headContent;
    Array.from(tempDiv.children).forEach(node => {
      if (node.tagName === 'SCRIPT' || node.tagName === 'LINK' || node.tagName === 'STYLE') {
        const cloned = node.cloneNode(true);
        if (cloned.tagName === 'SCRIPT' && cloned.src) {
           const s = document.createElement('script');
           s.src = cloned.src;
           document.head.appendChild(s);
        } else {
           document.head.appendChild(cloned);
        }
      }
    });
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `
<div id="wrapper" class="site wp-site-blocks">
			<a class="skip-link screen-reader-text scroll-ignore" href="#main">Skip to content</a>
		<header id="masthead" class="site-header" role="banner" itemtype="https://schema.org/WPHeader" itemscope>
	<div id="main-header" class="site-header-wrap">
		<div class="site-header-inner-wrap">
			<div class="site-header-upper-wrap">
				<div class="site-header-upper-inner-wrap">
					<div class="site-top-header-wrap site-header-row-container site-header-focus-item site-header-row-layout-standard" data-section="kadence_customizer_header_top">
	<div class="site-header-row-container-inner">
				<div class="site-container">
			<div class="site-top-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-center-column">
									<div class="site-header-top-section-left site-header-section site-header-section-left">
													<div class="site-header-top-section-left-center site-header-section site-header-section-left-center">
															</div>
												</div>
													<div class="site-header-top-section-center site-header-section site-header-section-center">
						<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_header_html">
	<div class="header-html inner-link-style-normal"><div class="header-html-inner">KING INTERNATIONAL ( GST IN : 03BDKPS4058N1Z1)</div></div></div>
					</div>
													<div class="site-header-top-section-right site-header-section site-header-section-right">
													<div class="site-header-top-section-right-center site-header-section site-header-section-right-center">
															</div>
							<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_header_social">
	<div class="header-social-wrap"><div class="header-social-inner-wrap element-social-inner-wrap social-show-label-false social-style-outline"><a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"  class="social-button header-social-item social-link-facebook"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-facebook-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Facebook</title><path d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"></path>
				</svg></span></a><a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"  class="social-button header-social-item social-link-twitter"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-twitter-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>Twitter</title><path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"></path>
				</svg></span></a><a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"  class="social-button header-social-item social-link-instagram"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-instagram-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Instagram</title><path d="M21.138 0.242c3.767 0.007 3.914 0.038 4.65 0.144 1.52 0.219 2.795 0.825 3.837 1.821 0.584 0.562 0.987 1.112 1.349 1.848 0.442 0.899 0.659 1.75 0.758 3.016 0.021 0.271 0.031 4.592 0.031 8.916s-0.009 8.652-0.030 8.924c-0.098 1.245-0.315 2.104-0.743 2.986-0.851 1.755-2.415 3.035-4.303 3.522-0.685 0.177-1.304 0.26-2.371 0.31-0.381 0.019-4.361 0.024-8.342 0.024s-7.959-0.012-8.349-0.029c-0.921-0.044-1.639-0.136-2.288-0.303-1.876-0.485-3.469-1.784-4.303-3.515-0.436-0.904-0.642-1.731-0.751-3.045-0.031-0.373-0.039-2.296-0.039-8.87 0-2.215-0.002-3.866 0-5.121 0.006-3.764 0.037-3.915 0.144-4.652 0.219-1.518 0.825-2.795 1.825-3.833 0.549-0.569 1.105-0.975 1.811-1.326 0.915-0.456 1.756-0.668 3.106-0.781 0.374-0.031 2.298-0.038 8.878-0.038h5.13zM15.999 4.364v0c-3.159 0-3.555 0.014-4.796 0.070-1.239 0.057-2.084 0.253-2.824 0.541-0.765 0.297-1.415 0.695-2.061 1.342s-1.045 1.296-1.343 2.061c-0.288 0.74-0.485 1.586-0.541 2.824-0.056 1.241-0.070 1.638-0.070 4.798s0.014 3.556 0.070 4.797c0.057 1.239 0.253 2.084 0.541 2.824 0.297 0.765 0.695 1.415 1.342 2.061s1.296 1.046 2.061 1.343c0.74 0.288 1.586 0.484 2.825 0.541 1.241 0.056 1.638 0.070 4.798 0.070s3.556-0.014 4.797-0.070c1.239-0.057 2.085-0.253 2.826-0.541 0.765-0.297 1.413-0.696 2.060-1.343s1.045-1.296 1.343-2.061c0.286-0.74 0.482-1.586 0.541-2.824 0.056-1.241 0.070-1.637 0.070-4.797s-0.015-3.557-0.070-4.798c-0.058-1.239-0.255-2.084-0.541-2.824-0.298-0.765-0.696-1.415-1.343-2.061s-1.295-1.045-2.061-1.342c-0.742-0.288-1.588-0.484-2.827-0.541-1.241-0.056-1.636-0.070-4.796-0.070zM14.957 6.461c0.31-0 0.655 0 1.044 0 3.107 0 3.475 0.011 4.702 0.067 1.135 0.052 1.75 0.241 2.16 0.401 0.543 0.211 0.93 0.463 1.337 0.87s0.659 0.795 0.871 1.338c0.159 0.41 0.349 1.025 0.401 2.16 0.056 1.227 0.068 1.595 0.068 4.701s-0.012 3.474-0.068 4.701c-0.052 1.135-0.241 1.75-0.401 2.16-0.211 0.543-0.463 0.93-0.871 1.337s-0.794 0.659-1.337 0.87c-0.41 0.16-1.026 0.349-2.16 0.401-1.227 0.056-1.595 0.068-4.702 0.068s-3.475-0.012-4.702-0.068c-1.135-0.052-1.75-0.242-2.161-0.401-0.543-0.211-0.931-0.463-1.338-0.87s-0.659-0.794-0.871-1.337c-0.159-0.41-0.349-1.025-0.401-2.16-0.056-1.227-0.067-1.595-0.067-4.703s0.011-3.474 0.067-4.701c0.052-1.135 0.241-1.75 0.401-2.16 0.211-0.543 0.463-0.931 0.871-1.338s0.795-0.659 1.338-0.871c0.41-0.16 1.026-0.349 2.161-0.401 1.073-0.048 1.489-0.063 3.658-0.065v0.003zM16.001 10.024c-3.3 0-5.976 2.676-5.976 5.976s2.676 5.975 5.976 5.975c3.3 0 5.975-2.674 5.975-5.975s-2.675-5.976-5.975-5.976zM16.001 12.121c2.142 0 3.879 1.736 3.879 3.879s-1.737 3.879-3.879 3.879c-2.142 0-3.879-1.737-3.879-3.879s1.736-3.879 3.879-3.879zM22.212 8.393c-0.771 0-1.396 0.625-1.396 1.396s0.625 1.396 1.396 1.396 1.396-0.625 1.396-1.396c0-0.771-0.625-1.396-1.396-1.396v0.001z"></path>
				</svg></span></a></div></div></div>
					</div>
							</div>
		</div>
	</div>
</div>
<div class="site-main-header-wrap site-header-row-container site-header-focus-item site-header-row-layout-standard" data-section="kadence_customizer_header_main">
	<div class="site-header-row-container-inner">
				<div class="site-container">
			<div class="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-no-center">
									<div class="site-header-main-section-left site-header-section site-header-section-left">
						<div class="site-header-item site-header-focus-item" data-section="title_tagline">
	<div class="site-branding branding-layout-standard"><a class="brand has-logo-image" href="/" rel="home" aria-label=""><img fetchpriority="high" width="568" height="389" src="/wp-content/uploads/2022/07/logo1.png" class="custom-logo" alt="" decoding="async" srcset="/wp-content/uploads/2022/07/logo1.png 568w, /wp-content/uploads/2022/07/logo1-300x205.png 300w" sizes="(max-width: 568px) 100vw, 568px" /><div class="site-title-wrap"><p class="site-title"></p></div></a></div></div>
					</div>
																	<div class="site-header-main-section-right site-header-section site-header-section-right">
						<div class="site-header-item site-header-focus-item site-header-item-main-navigation header-navigation-layout-stretch-false header-navigation-layout-fill-stretch-false" data-section="kadence_customizer_primary_navigation">
		<nav id="site-navigation" class="main-navigation header-navigation nav--toggle-sub header-navigation-style-underline header-navigation-dropdown-animation-fade-up" role="navigation" aria-label="Primary Navigation">
				<div class="primary-menu-container header-menu-container">
			<ul id="primary-menu" class="menu"><li id="menu-item-1089" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-974 current_page_item menu-item-1089"><a href="/" aria-current="page">Home</a></li>
<li id="menu-item-961" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-961"><a href="/?page_id=958">Products</a></li>
<li id="menu-item-1685" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1685"><a href="/?page_id=1683">PadBots</a></li>
<li id="menu-item-1141" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1141"><a href="/?page_id=1090">About</a></li>
<li id="menu-item-1171" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1171"><a href="/?page_id=1142">Contact</a></li>
<li id="menu-item-1521" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1521"><a href="https://ludhcloud.com/king/wp-content/uploads/2022/09/catalogue-1.pdf"><span class="nav-drop-title-wrap">Downloads<span class="dropdown-nav-toggle"><span class="kadence-svg-iconset svg-baseline"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Expand</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
				</svg></span></span></span></a>
<ul class="sub-menu">
	<li id="menu-item-1545" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1545"><a href="https://ludhcloud.com/king/wp-content/uploads/2022/09/Catalogue-2.pdf">Catalogue-2</a></li>
	<li id="menu-item-1661" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1661"><a href="https://ludhcloud.com/king/wp-content/uploads/2023/03/ajoni.pdf">Ajooni Catalogue</a></li>
	<li id="menu-item-1784" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1784"><a href="https://ludhcloud.com/king/wp-content/uploads/2025/03/PadBot-Robots-202412.pdf">Probots-Catalogue</a></li>
</ul>
</li>
<li id="menu-item-965" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-965"><a href="#"><span class="nav-drop-title-wrap">Account<span class="dropdown-nav-toggle"><span class="kadence-svg-iconset svg-baseline"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Expand</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
				</svg></span></span></span></a>
<ul class="sub-menu">
	<li id="menu-item-966" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-966"><a href="/?page_id=968">My account</a></li>
	<li id="menu-item-967" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-967"><a href="/?page_id=959">Cart</a></li>
</ul>
</li>
</ul>		</div>
	</nav>
	</div>
<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_cart">
	<div class="header-cart-wrap kadence-header-cart"><span class="header-cart-empty-check header-cart-is-empty-true"></span><div class="header-cart-inner-wrap cart-show-label-false cart-style-slide"><button data-toggle-target="#cart-drawer" aria-label="Shopping Cart" class="drawer-toggle header-cart-button" data-toggle-body-class="showing-popup-drawer-from-right" aria-expanded="false" data-set-focus=".cart-toggle-close"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-shopping-bag-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Shopping Cart</title><path d="M19 5h-14l1.5-2h11zM21.794 5.392l-2.994-3.992c-0.196-0.261-0.494-0.399-0.8-0.4h-12c-0.326 0-0.616 0.156-0.8 0.4l-2.994 3.992c-0.043 0.056-0.081 0.117-0.111 0.182-0.065 0.137-0.096 0.283-0.095 0.426v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.219-0.071-0.422-0.189-0.585-0.004-0.005-0.007-0.010-0.011-0.015zM4 7h16v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707zM15 10c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121c0-0.552-0.448-1-1-1s-1 0.448-1 1c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path>
				</svg></span></button></div></div></div>
<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_header_search">
		<div class="search-toggle-open-container">
						<button class="search-toggle-open drawer-toggle search-toggle-style-default" aria-label="View Search Form" data-toggle-target="#search-drawer" data-toggle-body-class="showing-popup-drawer-from-full" aria-expanded="false" data-set-focus="#search-drawer .search-field"
					>
						<span class="search-toggle-icon"><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-search-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>Search</title><path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zM26 26c0 1.094-0.906 2-2 2-0.531 0-1.047-0.219-1.406-0.594l-5.359-5.344c-1.828 1.266-4.016 1.937-6.234 1.937-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-0.672 4.406-1.937 6.234l5.359 5.359c0.359 0.359 0.578 0.875 0.578 1.406z"></path>
				</svg></span></span>
		</button>
	</div>
	</div>
					</div>
							</div>
		</div>
	</div>
</div>
				</div>
			</div>
					</div>
	</div>
	
<div id="mobile-header" class="site-mobile-header-wrap">
	<div class="site-header-inner-wrap">
		<div class="site-header-upper-wrap">
			<div class="site-header-upper-inner-wrap">
			<div class="site-main-header-wrap site-header-focus-item site-header-row-layout-standard site-header-row-tablet-layout-default site-header-row-mobile-layout-default ">
	<div class="site-header-row-container-inner">
		<div class="site-container">
			<div class="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-no-center">
									<div class="site-header-main-section-left site-header-section site-header-section-left">
						<div class="site-header-item site-header-focus-item" data-section="title_tagline">
	<div class="site-branding mobile-site-branding branding-layout-standard branding-tablet-layout-standard branding-mobile-layout-standard"><a class="brand has-logo-image" href="/" rel="home" aria-label=""><img fetchpriority="high" width="568" height="389" src="/wp-content/uploads/2022/07/logo1.png" class="custom-logo" alt="" decoding="async" srcset="/wp-content/uploads/2022/07/logo1.png 568w, /wp-content/uploads/2022/07/logo1-300x205.png 300w" sizes="(max-width: 568px) 100vw, 568px" /><div class="site-title-wrap"><div class="site-title"></div></div></a></div></div>
					</div>
																	<div class="site-header-main-section-right site-header-section site-header-section-right">
						<div class="site-header-item site-header-focus-item site-header-item-navgation-popup-toggle" data-section="kadence_customizer_mobile_trigger">
		<div class="mobile-toggle-open-container">
						<button id="mobile-toggle" class="menu-toggle-open drawer-toggle menu-toggle-style-default" aria-label="Open menu" data-toggle-target="#mobile-drawer" data-toggle-body-class="showing-popup-drawer-from-right" aria-expanded="false" data-set-focus=".menu-toggle-close"
					>
						<span class="menu-toggle-icon"><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-menu-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Toggle Menu</title><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
				</svg></span></span>
		</button>
	</div>
	</div>
					</div>
							</div>
		</div>
	</div>
</div>
			</div>
		</div>
			</div>
</div>
</header>

	<div id="inner-wrap" class="wrap hfeed kt-clear">
		<div id="primary" class="content-area">
	<div class="content-container site-container">
		<main id="main" class="site-main" role="main">
			<div class="woocommerce kadence-woo-messages-none-woo-pages woocommerce-notices-wrapper"></div>			<div class="content-wrap">
				<article id="post-974" class="entry content-bg single-entry post-974 page type-page status-publish has-post-thumbnail hentry">
	<div class="entry-content-wrap">
		
<div class="entry-content single-content">
			<div data-elementor-type="wp-page" data-elementor-id="974" class="elementor elementor-974">
						<section class="elementor-section elementor-top-section elementor-element elementor-element-94295a8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="94295a8" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-64df6b4" data-id="64df6b4" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-1de45e7 elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel" data-id="1de45e7" data-element_type="widget" data-e-type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500}" data-widget_type="image-carousel.default">
				<div class="elementor-widget-container">
							<div class="elementor-image-carousel-wrapper swiper" role="region" aria-roledescription="carousel" aria-label="Image Carousel" dir="ltr">
			<div class="elementor-image-carousel swiper-wrapper swiper-image-stretch" aria-live="off">
								<div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="1 of 3"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.26-PM.jpeg" alt="WhatsApp Image 2022-07-05 at 12.11.26 PM" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="2 of 3"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.26-PM-1.jpeg" alt="WhatsApp Image 2022-07-05 at 12.11.26 PM (1)" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 of 3"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.25-PM.jpeg" alt="WhatsApp Image 2022-07-05 at 12.11.25 PM" /></figure></div>			</div>
												<div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0">
						<i aria-hidden="true" class="eicon-chevron-left"></i>					</div>
					<div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0">
						<i aria-hidden="true" class="eicon-chevron-right"></i>					</div>
				
									<div class="swiper-pagination"></div>
									</div>
						</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d477344" data-id="d477344" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-11cae02 elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel" data-id="11cae02" data-element_type="widget" data-e-type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500}" data-widget_type="image-carousel.default">
				<div class="elementor-widget-container">
							<div class="elementor-image-carousel-wrapper swiper" role="region" aria-roledescription="carousel" aria-label="Image Carousel" dir="ltr">
			<div class="elementor-image-carousel swiper-wrapper swiper-image-stretch" aria-live="off">
								<div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="1 of 4"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2020/10/WhatsApp-Image-2022-07-05-at-12.11.23-PM.jpeg" alt="WhatsApp Image 2022-07-05 at 12.11.23 PM" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="2 of 4"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.24-PM.jpeg" alt="WhatsApp Image 2022-07-05 at 12.11.24 PM" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 of 4"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.24-PM-2.jpeg" alt="WhatsApp Image 2022-07-05 at 12.11.24 PM (2)" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="4 of 4"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.24-PM-1.jpeg" alt="WhatsApp Image 2022-07-05 at 12.11.24 PM (1)" /></figure></div>			</div>
												<div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0">
						<i aria-hidden="true" class="eicon-chevron-left"></i>					</div>
					<div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0">
						<i aria-hidden="true" class="eicon-chevron-right"></i>					</div>
				
									<div class="swiper-pagination"></div>
									</div>
						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-9b77572 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9b77572" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c0a5fd4" data-id="c0a5fd4" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-fa7de10 elementor-invisible elementor-widget elementor-widget-heading" data-id="fa7de10" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;bounceIn&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h4 class="elementor-heading-title elementor-size-default">Deals in : Used  Computerized  Flat Knitting Machines, Circular Knitting Machine</h4>				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-9cff900 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9cff900" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ba21ff8" data-id="ba21ff8" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-cd41e82 elementor-widget elementor-widget-image" data-id="cd41e82" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" width="1024" height="103" src="/wp-content/uploads/2022/07/Capture5-1024x103.jpg" class="attachment-large size-large wp-image-1227" alt="" srcset="/wp-content/uploads/2022/07/Capture5-1024x103.jpg 1024w, /wp-content/uploads/2022/07/Capture5-300x30.jpg 300w, /wp-content/uploads/2022/07/Capture5-768x77.jpg 768w, /wp-content/uploads/2022/07/Capture5-700x70.jpg 700w, /wp-content/uploads/2022/07/Capture5.jpg 1047w" sizes="(max-width: 1024px) 100vw, 1024px" />															</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-86be9f1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="86be9f1" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dedbefb" data-id="dedbefb" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-fa8b84e elementor-widget elementor-widget-heading" data-id="fa8b84e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">Our Products</h2>				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-0d6b5fa elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0d6b5fa" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-21e1f5b" data-id="21e1f5b" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap">
							</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e359271" data-id="e359271" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap">
							</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-812c501 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="812c501" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dfde074" data-id="dfde074" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-9f500f4 elementor-widget elementor-widget-text-editor" data-id="9f500f4" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><strong>“Experience counts everytime”</strong> – Since 1986 King International has been involved as well known  importer, Supplier and distributors of circular knitting  and flat knitting machine in India.</p>								</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-4afdb65 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="4afdb65" data-element_type="section" data-e-type="section" data-settings="{&quot;animation&quot;:&quot;fadeInDown&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-916cf8b" data-id="916cf8b" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-a336e5b elementor-widget elementor-widget-image" data-id="a336e5b" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" width="235" height="214" src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.26-PM-1.jpeg" class="attachment-large size-large wp-image-1188" alt="" />															</div>
				</div>
				<div class="elementor-element elementor-element-dec938b elementor-button-success elementor-align-center elementor-widget elementor-widget-button" data-id="dec938b" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a class="elementor-button elementor-button-link elementor-size-sm" href="#">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Click here</span>
					</span>
					</a>
				</div>
								</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-74ecbf5" data-id="74ecbf5" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-82f3ec0 elementor-widget elementor-widget-image" data-id="82f3ec0" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="217" height="232" src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.26-PM.jpeg" class="attachment-large size-large wp-image-1189" alt="" />															</div>
				</div>
				<div class="elementor-element elementor-element-93ec6d9 elementor-button-success elementor-align-center elementor-widget elementor-widget-button" data-id="93ec6d9" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a class="elementor-button elementor-button-link elementor-size-sm" href="#">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Click here</span>
					</span>
					</a>
				</div>
								</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-17bbd5e" data-id="17bbd5e" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-353c5f4 elementor-widget elementor-widget-image" data-id="353c5f4" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="665" height="461" src="/wp-content/uploads/2020/10/WhatsApp-Image-2022-07-05-at-12.11.23-PM.jpeg" class="attachment-large size-large wp-image-1199" alt="" srcset="/wp-content/uploads/2020/10/WhatsApp-Image-2022-07-05-at-12.11.23-PM.jpeg 665w, /wp-content/uploads/2020/10/WhatsApp-Image-2022-07-05-at-12.11.23-PM-300x208.jpeg 300w" sizes="(max-width: 665px) 100vw, 665px" />															</div>
				</div>
				<div class="elementor-element elementor-element-979cc5b elementor-button-success elementor-align-center elementor-widget elementor-widget-button" data-id="979cc5b" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a class="elementor-button elementor-button-link elementor-size-sm" href="#">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Click here</span>
					</span>
					</a>
				</div>
								</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-db5a0bb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="db5a0bb" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8133a56" data-id="8133a56" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap">
							</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-a9ca5da elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="a9ca5da" data-element_type="section" data-e-type="section" data-settings="{&quot;animation&quot;:&quot;fadeInDown&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6477c69" data-id="6477c69" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-4cd47b0 elementor-widget elementor-widget-image" data-id="4cd47b0" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="555" height="553" src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.25-PM.jpeg" class="attachment-large size-large wp-image-1187" alt="" srcset="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.25-PM.jpeg 555w, /wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.25-PM-100x100.jpeg 100w, /wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.25-PM-300x300.jpeg 300w, /wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.25-PM-150x150.jpeg 150w" sizes="(max-width: 555px) 100vw, 555px" />															</div>
				</div>
				<div class="elementor-element elementor-element-3b264e8 elementor-button-success elementor-align-center elementor-widget elementor-widget-button" data-id="3b264e8" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a class="elementor-button elementor-button-link elementor-size-sm" href="#">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Click here</span>
					</span>
					</a>
				</div>
								</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ea34918" data-id="ea34918" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-af72a61 elementor-widget elementor-widget-image" data-id="af72a61" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="495" height="500" src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.25-PM-2.jpeg" class="attachment-large size-large wp-image-1186" alt="" srcset="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.25-PM-2.jpeg 495w, /wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.25-PM-2-100x100.jpeg 100w, /wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.25-PM-2-297x300.jpeg 297w" sizes="(max-width: 495px) 100vw, 495px" />															</div>
				</div>
				<div class="elementor-element elementor-element-99b336e elementor-button-success elementor-align-center elementor-widget elementor-widget-button" data-id="99b336e" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a class="elementor-button elementor-button-link elementor-size-sm" href="#">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Click here</span>
					</span>
					</a>
				</div>
								</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b407a1e" data-id="b407a1e" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-63168cf elementor-widget elementor-widget-image" data-id="63168cf" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="554" height="554" src="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.24-PM.jpeg" class="attachment-large size-large wp-image-1184" alt="" srcset="/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.24-PM.jpeg 554w, /wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.24-PM-100x100.jpeg 100w, /wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.24-PM-300x300.jpeg 300w, /wp-content/uploads/2022/07/WhatsApp-Image-2022-07-05-at-12.11.24-PM-150x150.jpeg 150w" sizes="(max-width: 554px) 100vw, 554px" />															</div>
				</div>
				<div class="elementor-element elementor-element-aafd4dd elementor-button-success elementor-align-center elementor-widget elementor-widget-button" data-id="aafd4dd" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a class="elementor-button elementor-button-link elementor-size-sm" href="#">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Click here</span>
					</span>
					</a>
				</div>
								</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-ff584ac elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ff584ac" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2369cfe" data-id="2369cfe" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-78806a9 elementor-invisible elementor-widget elementor-widget-heading" data-id="78806a9" data-element_type="widget" data-e-type="widget" data-settings="{&quot;_animation&quot;:&quot;bounceIn&quot;}" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h4 class="elementor-heading-title elementor-size-default">Deals in :Disposable POD Devices &amp; Barret Caps</h4>				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-65165da elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="65165da" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c03eb0b" data-id="c03eb0b" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-090a799 elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel" data-id="090a799" data-element_type="widget" data-e-type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500}" data-widget_type="image-carousel.default">
				<div class="elementor-widget-container">
							<div class="elementor-image-carousel-wrapper swiper" role="region" aria-roledescription="carousel" aria-label="Image Carousel" dir="ltr">
			<div class="elementor-image-carousel swiper-wrapper swiper-image-stretch" aria-live="off">
								<div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="1 of 4"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-10.59.02.jpeg" alt="WhatsApp Image 2022-12-08 at 10.59.02" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="2 of 4"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-10.59.15.jpeg" alt="WhatsApp Image 2022-12-08 at 10.59.15" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 of 4"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-10.59.22.jpeg" alt="WhatsApp Image 2022-12-08 at 10.59.22" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="4 of 4"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-08-at-10.59.32.jpeg" alt="WhatsApp Image 2022-12-08 at 10.59.32" /></figure></div>			</div>
												<div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0">
						<i aria-hidden="true" class="eicon-chevron-left"></i>					</div>
					<div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0">
						<i aria-hidden="true" class="eicon-chevron-right"></i>					</div>
				
									<div class="swiper-pagination"></div>
									</div>
						</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-dc40d3c" data-id="dc40d3c" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-04d67b4 elementor-arrows-position-outside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel" data-id="04d67b4" data-element_type="widget" data-e-type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500}" data-widget_type="image-carousel.default">
				<div class="elementor-widget-container">
							<div class="elementor-image-carousel-wrapper swiper" role="region" aria-roledescription="carousel" aria-label="Image Carousel" dir="ltr">
			<div class="elementor-image-carousel swiper-wrapper" aria-live="off">
								<div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="1 of 3"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-12-at-16.09.12.jpeg" alt="WhatsApp Image 2022-09-12 at 16.09.12" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="2 of 3"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-12-at-16.09.12-1-1024x474.jpeg" alt="WhatsApp Image 2022-09-12 at 16.09.12 (1)" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 of 3"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-12-at-16.09.11.jpeg" alt="WhatsApp Image 2022-09-12 at 16.09.11" /></figure></div>			</div>
												<div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0">
						<i aria-hidden="true" class="eicon-chevron-left"></i>					</div>
					<div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0">
						<i aria-hidden="true" class="eicon-chevron-right"></i>					</div>
				
									<div class="swiper-pagination"></div>
									</div>
						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-afc534c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="afc534c" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cf1e5ea" data-id="cf1e5ea" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-4a37327 elementor-align-center elementor-widget elementor-widget-button" data-id="4a37327" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a class="elementor-button elementor-button-link elementor-size-sm" href="https://ludhcloud.com/king/pod-devices/">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">See More &gt;&gt;</span>
					</span>
					</a>
				</div>
								</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-242dccf" data-id="242dccf" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-2a91e8c elementor-align-center elementor-button-info elementor-widget elementor-widget-button" data-id="2a91e8c" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a class="elementor-button elementor-button-link elementor-size-sm" href="https://ludhcloud.com/king/pod-devices/">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">See More &gt;&gt;</span>
					</span>
					</a>
				</div>
								</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-41551a7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="41551a7" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5275835" data-id="5275835" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-1a9f501 elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel" data-id="1a9f501" data-element_type="widget" data-e-type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500}" data-widget_type="image-carousel.default">
				<div class="elementor-widget-container">
							<div class="elementor-image-carousel-wrapper swiper" role="region" aria-roledescription="carousel" aria-label="Image Carousel" dir="ltr">
			<div class="elementor-image-carousel swiper-wrapper swiper-image-stretch" aria-live="off">
								<div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="1 of 3"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/07/Banner02.jpg" alt="Banner02" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="2 of 3"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/07/Machine-720x325-v2.jpg" alt="Machine--720x325-v2" /></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 of 3"><figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="/wp-content/uploads/2022/07/Threading-knitting-vacancy.jpg" alt="Threading-knitting-vacancy" /></figure></div>			</div>
												<div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0">
						<i aria-hidden="true" class="eicon-chevron-left"></i>					</div>
					<div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0">
						<i aria-hidden="true" class="eicon-chevron-right"></i>					</div>
				
									<div class="swiper-pagination"></div>
									</div>
						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-3a115de elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3a115de" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e5fabfc" data-id="e5fabfc" data-element_type="column" data-e-type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-a6ce3fc elementor-widget elementor-widget-image" data-id="a6ce3fc" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img loading="lazy" decoding="async" width="1024" height="768" src="/wp-content/uploads/2022/07/1-1-1024x768.jpg" class="attachment-large size-large wp-image-1297" alt="" srcset="/wp-content/uploads/2022/07/1-1-1024x768.jpg 1024w, /wp-content/uploads/2022/07/1-1-300x225.jpg 300w, /wp-content/uploads/2022/07/1-1-768x576.jpg 768w, /wp-content/uploads/2022/07/1-1-700x525.jpg 700w, /wp-content/uploads/2022/07/1-1.jpg 1152w" sizes="(max-width: 1024px) 100vw, 1024px" />															</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-db7c594" data-id="db7c594" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-dac8ec9 elementor-widget elementor-widget-heading" data-id="dac8ec9" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">What we do here </h2>				</div>
				</div>
				<div class="elementor-element elementor-element-ed03e7a elementor-widget elementor-widget-text-editor" data-id="ed03e7a" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<div class="wpb_text_column wpb_content_element "><div class="wpb_wrapper"><p><b>Some of the causes that deliver  apart from others are mentioned below:</b></p><p>» Creative product range<br />» Commitment for quality<br />» Great value price<br />» Experienced team of hardworkers<br />» Timely deliveries makes us unique<br />» Ethical business approach</p></div></div>								</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-e3a4d24 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="e3a4d24" data-element_type="section" data-e-type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e7ad224" data-id="e7ad224" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-8e59a4e elementor-widget elementor-widget-image" data-id="8e59a4e" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" src="/wp-content/uploads/elementor/thumbs/phone-512-rlk3fsuwic9ybqhx7ls4b5d2w0aft0d31wapeorud0.webp" title="phone-512" alt="phone-512" loading="lazy" />															</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-59812bf" data-id="59812bf" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-b697e63 elementor-widget elementor-widget-image" data-id="b697e63" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" src="/wp-content/uploads/elementor/thumbs/email-rlk3fsuwic9ybqhx7ls4b5d2w0aft0d31wapeorud0.jpg" title="email" alt="email" loading="lazy" />															</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b30582a" data-id="b30582a" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-b6925b5 elementor-widget elementor-widget-image" data-id="b6925b5" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
															<img decoding="async" src="/wp-content/uploads/elementor/thumbs/address-rlk3fsuwic9ybqhx7ls4b5d2w0aft0d31wapeorud0.png" title="address" alt="address" loading="lazy" />															</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-676f7c8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="676f7c8" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-519343a" data-id="519343a" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-a9382e9 elementor-widget elementor-widget-text-editor" data-id="a9382e9" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<div class="wpb_text_column wpb_content_element ">
<div class="wpb_wrapper">
<p style="color: orange;">Have any question? call us now</p>
Mr.Navi (+91-98039-15279)
Mr.Tony (+91-97819-82838)
Mr. Santosh Bhardwaj (+91-97806-72092)
<br>

</div>
</div>								</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-f5661eb" data-id="f5661eb" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-d8cbbe6 elementor-widget elementor-widget-text-editor" data-id="d8cbbe6" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<div class="wpb_text_column wpb_content_element ">
<div class="wpb_wrapper">
<p style="color: orange;">For any support Drop an email</p><br>
tonymaster786@gmail.com

</div>
</div>								</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ba50459" data-id="ba50459" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-b4596ef elementor-widget elementor-widget-text-editor" data-id="b4596ef" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<div class="wpb_text_column wpb_content_element ">
<div class="wpb_wrapper">
<p style="color: orange;">Address :</p>
B.O : #88A, Industrial Area-A, Ludhiana -141003, (PB) INDIA
H.O : Flat 9-G, M.I.G Flats, Dasmesh Colony, Gill Chowk , Ludhiana -141003

</div>
</div>								</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-cae5ff7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cae5ff7" data-element_type="section" data-e-type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e0f778e" data-id="e0f778e" data-element_type="column" data-e-type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-337d1ed elementor-widget elementor-widget-text-editor" data-id="337d1ed" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<div class="wpb_text_column wpb_content_element ">
<div class="wpb_wrapper">
<p style="color: orange;">CHINA OFFICE :</p>
49 NO., Shui Dun Road, Tudian,Tongxiang City, Zhejiang Province, China 

</div>
</div>								</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				</div>
		</div>
	</div>
</article>

			</div>
					</main>
			</div>
</div>
	</div>
	<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="site-footer-wrap">
		<div class="site-top-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-contained site-footer-row-tablet-layout-default site-footer-row-mobile-layout-standard" data-section="kadence_customizer_footer_top">
	<div class="site-footer-row-container-inner">
				<div class="site-container">
			<div class="site-top-footer-inner-wrap site-footer-row site-footer-row-columns-5 site-footer-row-column-layout-equal site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-column ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
									<div class="site-footer-top-section-1 site-footer-section footer-section-inner-items-1">
						<div class="footer-widget-area widget-area site-footer-focus-item footer-widget4 content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="sidebar-widgets-footer4">
	<div class="footer-widget-area-inner site-info-inner">
		<section id="text-1" class="widget widget_text"><h2 class="widget-title">About Us</h2>			<div class="textwidget"><p align="justify">After more than ten year of market test and development, the company has always been adhering to the business tenet of  </p>
<p style="color:orange"> &#8220;CUSTOMER FIRST&#8221; IMPROVING TO PROVIDE CUSTOMERS WITH GOOD SERVICE.</p>
</div>
		</section>	</div>
</div>
					</div>
										<div class="site-footer-top-section-2 site-footer-section footer-section-inner-items-1">
						<div class="footer-widget-area widget-area site-footer-focus-item footer-widget3 content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="sidebar-widgets-footer3">
	<div class="footer-widget-area-inner site-info-inner">
		<section id="nav_menu-3" class="widget widget_nav_menu"><h2 class="widget-title">QUICK LINKS</h2><div class="collapse-sub-navigation"><ul id="menu-nav_menu-3" class="menu has-collapse-sub-nav"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-974 current_page_item menu-item-1089"><a href="/" aria-current="page">Home</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-961"><a href="/?page_id=958">Products</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1685"><a href="/?page_id=1683">PadBots</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1141"><a href="/?page_id=1090">About</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1171"><a href="/?page_id=1142">Contact</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1521"><div class="drawer-nav-drop-wrap"><a href="https://ludhcloud.com/king/wp-content/uploads/2022/09/catalogue-1.pdf">Downloads</a><button class="drawer-sub-toggle" data-toggle-duration="10" data-toggle-target="#menu-nav_menu-3 .menu-item-1521 &gt; .sub-menu" aria-expanded="false"><span class="screen-reader-text">Expand child menu</span><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Expand</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
				</svg></span></button></div>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1545"><a href="https://ludhcloud.com/king/wp-content/uploads/2022/09/Catalogue-2.pdf">Catalogue-2</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1661"><a href="https://ludhcloud.com/king/wp-content/uploads/2023/03/ajoni.pdf">Ajooni Catalogue</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1784"><a href="https://ludhcloud.com/king/wp-content/uploads/2025/03/PadBot-Robots-202412.pdf">Probots-Catalogue</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-965"><div class="drawer-nav-drop-wrap"><a href="#">Account</a><button class="drawer-sub-toggle" data-toggle-duration="10" data-toggle-target="#menu-nav_menu-3 .menu-item-965 &gt; .sub-menu" aria-expanded="false"><span class="screen-reader-text">Expand child menu</span><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Expand</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
				</svg></span></button></div>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-966"><a href="/?page_id=968">My account</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-967"><a href="/?page_id=959">Cart</a></li>
</ul>
</li>
</ul></div></section><section id="block-18" class="widget widget_block widget_media_image">
<figure class="wp-block-image size-full"><img loading="lazy" decoding="async" width="568" height="389" src="https://ludhcloud.com/king/wp-content/uploads/2022/07/logo2-1.png" alt="" class="wp-image-1389" srcset="/wp-content/uploads/2022/07/logo2-1.png 568w, /wp-content/uploads/2022/07/logo2-1-300x205.png 300w" sizes="(max-width: 568px) 100vw, 568px" /></figure>
</section>	</div>
</div>
					</div>
										<div class="site-footer-top-section-3 site-footer-section footer-section-inner-items-1">
						<div class="footer-widget-area widget-area site-footer-focus-item footer-widget2 content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="sidebar-widgets-footer2">
	<div class="footer-widget-area-inner site-info-inner">
			</div>
</div>
					</div>
										<div class="site-footer-top-section-4 site-footer-section footer-section-inner-items-1">
						<div class="footer-widget-area widget-area site-footer-focus-item footer-widget1 content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="sidebar-widgets-footer1">
	<div class="footer-widget-area-inner site-info-inner">
		<section id="block-17" class="widget widget_block"><style id="kadence-blocks-advancedheading-inline-css">
	.wp-block-kadence-advancedheading mark{background:transparent;border-style:solid;border-width:0}
	.wp-block-kadence-advancedheading mark.kt-highlight{color:#f76a0c;}
	.kb-adv-heading-icon{display: inline-flex;justify-content: center;align-items: center;}
	.is-layout-constrained > .kb-advanced-heading-link {display: block;}.wp-block-kadence-advancedheading.has-background{padding: 0;}	.single-content .kadence-advanced-heading-wrapper h1,
	.single-content .kadence-advanced-heading-wrapper h2,
	.single-content .kadence-advanced-heading-wrapper h3,
	.single-content .kadence-advanced-heading-wrapper h4,
	.single-content .kadence-advanced-heading-wrapper h5,
	.single-content .kadence-advanced-heading-wrapper h6 {margin: 1.5em 0 .5em;}
	.single-content .kadence-advanced-heading-wrapper+* { margin-top:0;}.kb-screen-reader-text{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);}
/*# sourceURL=kadence-blocks-advancedheading-inline-css */
</style>
<style>.wp-block-kadence-advancedheading.kt-adv-heading_d324b7-1b, .wp-block-kadence-advancedheading.kt-adv-heading_d324b7-1b[data-kb-block="kb-adv-heading_d324b7-1b"]{font-style:normal;}.wp-block-kadence-advancedheading.kt-adv-heading_d324b7-1b mark.kt-highlight, .wp-block-kadence-advancedheading.kt-adv-heading_d324b7-1b[data-kb-block="kb-adv-heading_d324b7-1b"] mark.kt-highlight{font-style:normal;color:#f76a0c;-webkit-box-decoration-break:clone;box-decoration-break:clone;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;}.wp-block-kadence-advancedheading.kt-adv-heading_d324b7-1b img.kb-inline-image, .wp-block-kadence-advancedheading.kt-adv-heading_d324b7-1b[data-kb-block="kb-adv-heading_d324b7-1b"] img.kb-inline-image{width:150px;vertical-align:baseline;}</style>
<h5 class="kt-adv-heading_d324b7-1b wp-block-kadence-advancedheading has-theme-palette-9-color has-text-color" data-kb-block="kb-adv-heading_d324b7-1b">ENQUIRY FORM </h5>
</section><section id="block-15" class="widget widget_block"><link rel='stylesheet' id='kadence-blocks-form-css' href='/wp-content/plugins/kadence-blocks/dist/style-blocks-form.css?ver=3.6.6' media='all' />
<style>.kb-form input.kadence-blocks-field.verify{opacity:0.0;position:absolute;top:0.0;left:0.0;width:0.0;height:0.0;z-index:-1;}</style>
<div class="wp-block-kadence-form kadence-form-_e8da39-4f kb-form-wrap"><form class="kb-form" action="" method="post"><div class="kadence-blocks-form-field kb-field-desk-width-100 kb-input-size-standard"><label for="kb_field__e8da39-4f_0">Name</label><input name="kb_field_0" id="kb_field__e8da39-4f_0" data-label="Name" type="text" placeholder="" value="" data-type="text" class="kb-field kb-text-style-field kb-text-field kb-field-0"/></div><div class="kadence-blocks-form-field kb-form-field-1 kb-field-desk-width-100 kb-input-size-standard"><label for="kb_field__e8da39-4f_1">Email<span class="required">*</span></label><input name="kb_field_1" id="kb_field__e8da39-4f_1" data-label="Email" type="email" placeholder="" value="" data-type="email" class="kb-field kb-text-style-field kb-email-field kb-field-1" data-required="yes"/></div><div class="kadence-blocks-form-field kb-form-field-2 kb-field-desk-width-100 kb-input-size-standard"><label for="kb_field__e8da39-4f_2">Message<span class="required">*</span></label><textarea name="kb_field_2" id="kb_field__e8da39-4f_2" data-label="Message" type="textarea" placeholder="" data-type="textarea" class="kb-field kb-text-style-field kb-textarea-field kb-field-2" rows="4" data-required="yes"></textarea></div><input type="hidden" name="_kb_form_id" value="_e8da39-4f"/><input type="hidden" name="_kb_form_post_id" value="block-15"/><input type="hidden" name="action" value="kb_process_ajax_submit"/><label class="kadence-verify-label">Email<input class="kadence-blocks-field verify" type="text" name="_kb_verify_email" autocomplete="new-password" aria-hidden="true" placeholder="Email" tabindex="-1" data-1p-ignore="true" data-lpignore="true" /></label><div class="kadence-blocks-form-field kb-submit-field kb-field-desk-width-100"><button class="kb-forms-submit button kb-button-size-standard kb-button-width-auto">Submit</button></div></form></div>
<noscript><div class="kadence-blocks-form-message kadence-blocks-form-warning">Please enable JavaScript in your browser to submit the form</div><style>.kadence-form-_e8da39-4f .kadence-blocks-form-field.kb-submit-field { display: none; }</style></noscript></section>	</div>
</div>
					</div>
										<div class="site-footer-top-section-5 site-footer-section footer-section-inner-items-1">
						<div class="footer-widget-area widget-area site-footer-focus-item footer-social content-align-left content-tablet-align-default content-mobile-align-default content-valign-top content-tablet-valign-default content-mobile-valign-default" data-section="kadence_customizer_footer_social">
	<div class="footer-widget-area-inner footer-social-inner">
		<div class="footer-social-wrap"><h2 class="widget-title">Get in touch</h2><div class="footer-social-inner-wrap element-social-inner-wrap social-show-label-false social-style-filled"><a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"  class="social-button footer-social-item social-link-facebook"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-facebook-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Facebook</title><path d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"></path>
				</svg></span></a><a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"  class="social-button footer-social-item social-link-instagram"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-instagram-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Instagram</title><path d="M21.138 0.242c3.767 0.007 3.914 0.038 4.65 0.144 1.52 0.219 2.795 0.825 3.837 1.821 0.584 0.562 0.987 1.112 1.349 1.848 0.442 0.899 0.659 1.75 0.758 3.016 0.021 0.271 0.031 4.592 0.031 8.916s-0.009 8.652-0.030 8.924c-0.098 1.245-0.315 2.104-0.743 2.986-0.851 1.755-2.415 3.035-4.303 3.522-0.685 0.177-1.304 0.26-2.371 0.31-0.381 0.019-4.361 0.024-8.342 0.024s-7.959-0.012-8.349-0.029c-0.921-0.044-1.639-0.136-2.288-0.303-1.876-0.485-3.469-1.784-4.303-3.515-0.436-0.904-0.642-1.731-0.751-3.045-0.031-0.373-0.039-2.296-0.039-8.87 0-2.215-0.002-3.866 0-5.121 0.006-3.764 0.037-3.915 0.144-4.652 0.219-1.518 0.825-2.795 1.825-3.833 0.549-0.569 1.105-0.975 1.811-1.326 0.915-0.456 1.756-0.668 3.106-0.781 0.374-0.031 2.298-0.038 8.878-0.038h5.13zM15.999 4.364v0c-3.159 0-3.555 0.014-4.796 0.070-1.239 0.057-2.084 0.253-2.824 0.541-0.765 0.297-1.415 0.695-2.061 1.342s-1.045 1.296-1.343 2.061c-0.288 0.74-0.485 1.586-0.541 2.824-0.056 1.241-0.070 1.638-0.070 4.798s0.014 3.556 0.070 4.797c0.057 1.239 0.253 2.084 0.541 2.824 0.297 0.765 0.695 1.415 1.342 2.061s1.296 1.046 2.061 1.343c0.74 0.288 1.586 0.484 2.825 0.541 1.241 0.056 1.638 0.070 4.798 0.070s3.556-0.014 4.797-0.070c1.239-0.057 2.085-0.253 2.826-0.541 0.765-0.297 1.413-0.696 2.060-1.343s1.045-1.296 1.343-2.061c0.286-0.74 0.482-1.586 0.541-2.824 0.056-1.241 0.070-1.637 0.070-4.797s-0.015-3.557-0.070-4.798c-0.058-1.239-0.255-2.084-0.541-2.824-0.298-0.765-0.696-1.415-1.343-2.061s-1.295-1.045-2.061-1.342c-0.742-0.288-1.588-0.484-2.827-0.541-1.241-0.056-1.636-0.070-4.796-0.070zM14.957 6.461c0.31-0 0.655 0 1.044 0 3.107 0 3.475 0.011 4.702 0.067 1.135 0.052 1.75 0.241 2.16 0.401 0.543 0.211 0.93 0.463 1.337 0.87s0.659 0.795 0.871 1.338c0.159 0.41 0.349 1.025 0.401 2.16 0.056 1.227 0.068 1.595 0.068 4.701s-0.012 3.474-0.068 4.701c-0.052 1.135-0.241 1.75-0.401 2.16-0.211 0.543-0.463 0.93-0.871 1.337s-0.794 0.659-1.337 0.87c-0.41 0.16-1.026 0.349-2.16 0.401-1.227 0.056-1.595 0.068-4.702 0.068s-3.475-0.012-4.702-0.068c-1.135-0.052-1.75-0.242-2.161-0.401-0.543-0.211-0.931-0.463-1.338-0.87s-0.659-0.794-0.871-1.337c-0.159-0.41-0.349-1.025-0.401-2.16-0.056-1.227-0.067-1.595-0.067-4.703s0.011-3.474 0.067-4.701c0.052-1.135 0.241-1.75 0.401-2.16 0.211-0.543 0.463-0.931 0.871-1.338s0.795-0.659 1.338-0.871c0.41-0.16 1.026-0.349 2.161-0.401 1.073-0.048 1.489-0.063 3.658-0.065v0.003zM16.001 10.024c-3.3 0-5.976 2.676-5.976 5.976s2.676 5.975 5.976 5.975c3.3 0 5.975-2.674 5.975-5.975s-2.675-5.976-5.975-5.976zM16.001 12.121c2.142 0 3.879 1.736 3.879 3.879s-1.737 3.879-3.879 3.879c-2.142 0-3.879-1.737-3.879-3.879s1.736-3.879 3.879-3.879zM22.212 8.393c-0.771 0-1.396 0.625-1.396 1.396s0.625 1.396 1.396 1.396 1.396-0.625 1.396-1.396c0-0.771-0.625-1.396-1.396-1.396v0.001z"></path>
				</svg></span></a><a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer"  class="social-button footer-social-item social-link-youtube"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-youtube-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><title>YouTube</title><path d="M11.109 17.625l7.562-3.906-7.562-3.953v7.859zM14 4.156c5.891 0 9.797 0.281 9.797 0.281 0.547 0.063 1.75 0.063 2.812 1.188 0 0 0.859 0.844 1.109 2.781 0.297 2.266 0.281 4.531 0.281 4.531v2.125s0.016 2.266-0.281 4.531c-0.25 1.922-1.109 2.781-1.109 2.781-1.062 1.109-2.266 1.109-2.812 1.172 0 0-3.906 0.297-9.797 0.297v0c-7.281-0.063-9.516-0.281-9.516-0.281-0.625-0.109-2.031-0.078-3.094-1.188 0 0-0.859-0.859-1.109-2.781-0.297-2.266-0.281-4.531-0.281-4.531v-2.125s-0.016-2.266 0.281-4.531c0.25-1.937 1.109-2.781 1.109-2.781 1.062-1.125 2.266-1.125 2.812-1.188 0 0 3.906-0.281 9.797-0.281v0z"></path>
				</svg></span></a></div></div>	</div>
</div>
					</div>
								</div>
		</div>
	</div>
</div>
<div class="site-bottom-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-contained site-footer-row-tablet-layout-contained site-footer-row-mobile-layout-standard" data-section="kadence_customizer_footer_bottom">
	<div class="site-footer-row-container-inner">
				<div class="site-container">
			<div class="site-bottom-footer-inner-wrap site-footer-row site-footer-row-columns-2 site-footer-row-column-layout-equal site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-row ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
									<div class="site-footer-bottom-section-1 site-footer-section footer-section-inner-items-1">
						
<div class="footer-widget-area site-info site-footer-focus-item content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="kadence_customizer_footer_html">
	<div class="footer-widget-area-inner site-info-inner">
		<div class="footer-html inner-link-style-normal"><div class="footer-html-inner"><p>&copy; 2026  - WordPress Theme by <a href="https://www.kadencewp.com/" rel="nofollow noopener" target="_blank">Kadence WP</a></p>
</div></div>	</div>
</div>
					</div>
										<div class="site-footer-bottom-section-2 site-footer-section footer-section-inner-items-1">
						<div class="footer-widget-area widget-area site-footer-focus-item footer-widget6 content-align-right content-tablet-align-left content-mobile-align-default content-valign-top content-tablet-valign-default content-mobile-valign-default" data-section="sidebar-widgets-footer6">
	<div class="footer-widget-area-inner site-info-inner">
		<section id="text-3" class="widget widget_text">			<div class="textwidget"><p>Privacy Policy | Cookies Policy | Terms and Conditions | Website Accessibility</p>
</div>
		</section>	</div>
</div>
					</div>
								</div>
		</div>
	</div>
</div>
	</div>
</footer>

</div>

	<div id="cart-drawer" class="popup-drawer popup-drawer-layout-sidepanel popup-drawer-side-right popup-mobile-drawer-side-right" data-drawer-target-string="#cart-drawer">
		<div class="drawer-overlay" data-drawer-target-string="#cart-drawer"></div>
		<div class="drawer-inner">
			<div class="drawer-header">
				<h2 class="side-cart-header">Review Cart</h2>
				<button class="cart-toggle-close drawer-toggle" aria-label="Close Cart"  data-toggle-target="#cart-drawer" data-toggle-body-class="showing-popup-drawer-from-right" aria-expanded="false" data-set-focus=".header-cart-button">
					<span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Toggle Menu Close</title><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
				</svg></span>				</button>
			</div>
			<div class="drawer-content woocommerce widget_shopping_cart">
								<div class="mini-cart-container">
					<div class="kadence-mini-cart-refresh">
						

	<p class="woocommerce-mini-cart__empty-message">No products in the cart.</p>


					</div>
				</div>
							</div>
		</div>
	</div>
	<a id="kt-scroll-up" tabindex="-1" aria-hidden="true" aria-label="Scroll to top" href="#wrapper" class="kadence-scroll-to-top scroll-up-wrap scroll-ignore scroll-up-side-right scroll-up-style-outline vs-lg-true vs-md-true vs-sm-false"><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-up-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Scroll to top</title><path d="M5.707 12.707l5.293-5.293v11.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.586l5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-7 7c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
				</svg></span></a><button id="kt-scroll-up-reader" href="#wrapper" aria-label="Scroll to top" class="kadence-scroll-to-top scroll-up-wrap scroll-ignore scroll-up-side-right scroll-up-style-outline vs-lg-true vs-md-true vs-sm-false"><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-up-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Scroll to top</title><path d="M5.707 12.707l5.293-5.293v11.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.586l5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-7 7c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
				</svg></span></button>			<script>
				const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( \`.e-con.e-parent:not(.e-lazyloaded)\` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );
			</script>
				<script>
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();
	</script>
		<div id="mobile-drawer" class="popup-drawer popup-drawer-layout-sidepanel popup-drawer-animation-fade popup-drawer-side-right" data-drawer-target-string="#mobile-drawer"
			>
		<div class="drawer-overlay" data-drawer-target-string="#mobile-drawer"></div>
		<div class="drawer-inner">
						<div class="drawer-header">
				<button class="menu-toggle-close drawer-toggle" aria-label="Close menu"  data-toggle-target="#mobile-drawer" data-toggle-body-class="showing-popup-drawer-from-right" aria-expanded="false" data-set-focus=".menu-toggle-open"
							>
					<span class="toggle-close-bar"></span>
					<span class="toggle-close-bar"></span>
				</button>
			</div>
			<div class="drawer-content mobile-drawer-content content-align-left content-valign-top">
								<div class="site-header-item site-header-focus-item site-header-item-mobile-navigation mobile-navigation-layout-stretch-false" data-section="kadence_customizer_mobile_navigation">
		<nav id="mobile-site-navigation" class="mobile-navigation drawer-navigation drawer-navigation-parent-toggle-false" role="navigation" aria-label="Primary Mobile Navigation">
				<div class="mobile-menu-container drawer-menu-container">
			<ul id="mobile-menu" class="menu has-collapse-sub-nav"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-974 current_page_item menu-item-1089"><a href="/" aria-current="page">Home</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-961"><a href="/?page_id=958">Products</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1685"><a href="/?page_id=1683">PadBots</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1141"><a href="/?page_id=1090">About</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1171"><a href="/?page_id=1142">Contact</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1521"><div class="drawer-nav-drop-wrap"><a href="https://ludhcloud.com/king/wp-content/uploads/2022/09/catalogue-1.pdf">Downloads</a><button class="drawer-sub-toggle" data-toggle-duration="10" data-toggle-target="#mobile-menu .menu-item-1521 &gt; .sub-menu" aria-expanded="false"><span class="screen-reader-text">Expand child menu</span><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Expand</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
				</svg></span></button></div>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1545"><a href="https://ludhcloud.com/king/wp-content/uploads/2022/09/Catalogue-2.pdf">Catalogue-2</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1661"><a href="https://ludhcloud.com/king/wp-content/uploads/2023/03/ajoni.pdf">Ajooni Catalogue</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1784"><a href="https://ludhcloud.com/king/wp-content/uploads/2025/03/PadBot-Robots-202412.pdf">Probots-Catalogue</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-965"><div class="drawer-nav-drop-wrap"><a href="#">Account</a><button class="drawer-sub-toggle" data-toggle-duration="10" data-toggle-target="#mobile-menu .menu-item-965 &gt; .sub-menu" aria-expanded="false"><span class="screen-reader-text">Expand child menu</span><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Expand</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
				</svg></span></button></div>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-966"><a href="/?page_id=968">My account</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-967"><a href="/?page_id=959">Cart</a></li>
</ul>
</li>
</ul>		</div>
	</nav>
	</div>
							</div>
		</div>
	</div>
	<link rel='stylesheet' id='wc-blocks-style-css' href='/wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks.css?ver=wc-10.6.2' media='all' />
<script id="kadence-navigation-js-extra">
var kadenceConfig = {"screenReader":{"expand":"Expand child menu","collapse":"Collapse child menu"},"breakPoints":{"desktop":"1024","tablet":768},"scrollOffset":"0"};
//# sourceURL=kadence-navigation-js-extra
</script>
<script id="kadence-navigation-js" src="/wp-content/themes/kadence/assets/js/navigation.min.js?ver=1.1.21" async></script>
<script id="kadence-shop-spinner-js" src="/wp-content/themes/kadence/assets/js/shop-spinner.min.js?ver=1.1.21" async></script>
<script id="sourcebuster-js-js" src="/wp-content/plugins/woocommerce/assets/js/sourcebuster/sourcebuster.min.js?ver=10.6.2"></script>
<script id="wc-order-attribution-js-extra">
var wc_order_attribution = {"params":{"lifetime":1.0e-5,"session":30,"base64":false,"ajaxurl":"/wp-admin/admin-ajax.php","prefix":"wc_order_attribution_","allowTracking":true},"fields":{"source_type":"current.typ","referrer":"current_add.rf","utm_campaign":"current.cmp","utm_source":"current.src","utm_medium":"current.mdm","utm_content":"current.cnt","utm_id":"current.id","utm_term":"current.trm","utm_source_platform":"current.plt","utm_creative_format":"current.fmt","utm_marketing_tactic":"current.tct","session_entry":"current_add.ep","session_start_time":"current_add.fd","session_pages":"session.pgs","session_count":"udata.vst","user_agent":"udata.uag"}};
//# sourceURL=wc-order-attribution-js-extra
</script>
<script id="wc-order-attribution-js" src="/wp-content/plugins/woocommerce/assets/js/frontend/order-attribution.min.js?ver=10.6.2"></script>
<script id="swiper-js" src="/wp-content/plugins/elementor/assets/lib/swiper/v8/swiper.min.js?ver=8.4.5"></script>
<script id="elementor-webpack-runtime-js" src="/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=4.0.1"></script>
<script id="elementor-frontend-modules-js" src="/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=4.0.1"></script>
<script id="jquery-ui-core-js" src="/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3"></script>
<script id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.0.1","is_static":false,"experimentalFeatures":{"additional_custom_breakpoints":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true},"urls":{"assets":"\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"\/wp-admin\/admin-ajax.php","uploadUrl":"\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"c41aed2714","atomicFormsSendForm":"67ac8d504c"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":974,"title":"","excerpt":"","featuredImage":"\/wp-content\/uploads\/2021\/04\/Home-scaled-1-296x1024.jpeg"}};
//# sourceURL=elementor-frontend-js-before
</script>
<script id="elementor-frontend-js" src="/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=4.0.1"></script>
<script id="kadence-blocks-form-js-extra">
var kadence_blocks_form_params = {"ajaxurl":"/wp-admin/admin-ajax.php","error_message":"Please fix the errors to proceed","nonce":"1dfcb09d44","required":"is required","mismatch":"does not match","validation":"is not valid","duplicate":"requires a unique entry and this value has already been used","item":"Item"};
//# sourceURL=kadence-blocks-form-js-extra
</script>
<script id="kadence-blocks-form-js" src="/wp-content/plugins/kadence-blocks/includes/assets/js/kb-form-block.min.js?ver=3.6.6"></script>
<script id="wp-emoji-settings" type="application/json">
{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"/wp-includes/js/wp-emoji-release.min.js?ver=7.0"}}
</script>
<script type="module">
/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=/wp-includes/js/wp-emoji-loader.min.js
</script>
	<div id="search-drawer" class="popup-drawer popup-drawer-layout-fullwidth" data-drawer-target-string="#search-drawer"
			>
		<div class="drawer-overlay" data-drawer-target-string="#search-drawer"></div>
		<div class="drawer-inner">
			<div class="drawer-header">
				<button class="search-toggle-close drawer-toggle" aria-label="Close search"  data-toggle-target="#search-drawer" data-toggle-body-class="showing-popup-drawer-from-full" aria-expanded="false" data-set-focus=".search-toggle-open"
							>
					<span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Toggle Menu Close</title><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
				</svg></span>				</button>
			</div>
			<div class="drawer-content">
				<form role="search" method="get" class="search-form" action="/">
				<label>
					<span class="screen-reader-text">Search for:</span>
					<input type="search" class="search-field" placeholder="Search &hellip;" value="" name="s" />
				</label>
				<input type="submit" class="search-submit" value="Search" />
			<div class="kadence-search-icon-wrap"><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-search-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>Search</title><path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zM26 26c0 1.094-0.906 2-2 2-0.531 0-1.047-0.219-1.406-0.594l-5.359-5.344c-1.828 1.266-4.016 1.937-6.234 1.937-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-0.672 4.406-1.937 6.234l5.359 5.359c0.359 0.359 0.578 0.875 0.578 1.406z"></path>
				</svg></span></div></form>			</div>
		</div>
	</div>
	` }} />
  );
}