/**
 * @file   mofron-comp-accordion/index.js
 * @brief  accordion component for mofron
 * @attention it needs to height parameter for enabling animation speed.
 * @license MIT
 */
const Text  = require('mofron-comp-text');
const Click = require('mofron-event-click');
const efStyle = require('mofron-effect-style');
const comutl = mofron.util.common;
const effutl = mofron.util.effect;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) title parameter
     *                key-value: component config
     * @short title
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.name('Accordion');
            this.shortForm('title');
            /* init config */
	    this.confmng().add("changeEvent", { type: "EventFrame", list: true });
            this.confmng().add("folding", { type: "boolean", init: false });

	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.child([this.title(), this.contents()]);
            this.childDom(this.contents().childDom());
	    this.styleDom(this.childDom());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * accordion title
     * 
     * @param (mixed) string: title string
     *                component: title component
     * @return (component) title component
     * @type parameter
     */
    title (prm) {
        try {
	    if ("string" === typeof prm) {
                prm = new Text(prm);
	    }
	    if (true === comutl.isinc(prm, "Component")) {
	        let acd = this;
	        let sw_fld = () => {
                    try {
			acd.folding(!acd.folding());
		    } catch (e) {
                        console.error(e.stack);
	                throw e;
		    }
		}
                prm.event(new Click(sw_fld));
	    }
            return this.innerComp("title", prm, mofron.class.Component);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * same as the title parameter
     * 
     * @param (mixed) sama as the title parameter
     * @return (component) title component
     * @type parameter
     */
    text (prm) {
        try {
            return super.title(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * contents component
     *
     * @param (component) contents component
     * @return (component) contents component
     * @type private
     */
    contents (prm) {
        try {
	    if (true === comutl.isinc(prm, "Component")) {
	        prm.config({
                    style: { "overflow": "scroll" },
                    effect: [
                        new efStyle({
                            style: { height: "0rem" }, speed: 200,
			    eid: 2, tag: "Accordion-folding"
                        }),
                        new efStyle({
                            style: { height: null }, speed: 200,
			    eid: 3, tag: "Accordion-folding"
                        })
                    ]
	        });
            }
            return this.innerComp("contents", prm, mofron.class.Component);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * height config
     * 
     * @param (string (size)) accordion height
     * @param (key-value) style option
     * @return (string (size)) accordion height
     * @type parameter
     */
    height (prm, opt) {
        try {
	    if (undefined === prm) {
                /* getter */
		return comutl.sizesum(this.title().height(), this.contents().height());
	    }
	    /* setter */
	    let cnt_hei = comutl.sizesum(prm, "-" + this.title().height());
	    super.height(cnt_hei, opt);
            /* set style effect */
            effutl.setconf(
	        this.contents(),
                { name: "Style", tag: "Accordion-folding", eid: 3 },
		{ style: { height : cnt_hei } }
            );
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }
    
    /**
     * folding accordion and folding status getter
     * 
     * @param (boolean) true: folding accordion component
     *                  false: unfolding accordion component
     * @return (boolean) folding status
     * @type parameter
     */
    folding (prm) {
        try {
	    /* setter */
            if ( ("boolean" === typeof prm) && (prm !== this.folding()) ) {
                this.contents().execEffect((true === prm) ? 2 : 3);
		let evt = this.changeEvent();
		for (let eidx in evt) {
		    evt.exec(this, prm);
                }
	    }
	    return this.confmng("folding", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * folding speed
     * 
     * @param (number) folding speed [ms]
     * @return (number) folding speed [ms]
     * @type parameter
     */
    speed (prm) {
        try {
	    let ret = null;
	    let eff = this.effect({ tag: "Accordion-folding" });
	    for (let eidx in eff) {
                ret = eff[eidx].speed(prm);
	    }
	    return ret;
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * change event
     * handler for change folding
     *
     * @param (function) change event function
     * @param (mixed) function parameter
     * @return (array) [EventFrame,..]
     * @type parameter
     */
    changeEvent (fnc, prm) {
        try {
	    return this.confmng("changeEvent", comutl.get_eframe(fnc,prm));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
