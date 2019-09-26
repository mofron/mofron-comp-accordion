/**
 * @file   mofron-comp-accordion/index.js
 * @brief  accordion component for mofron
 * @author simpart
 */
const mf     = require('mofron');
const Text   = require('mofron-comp-text');
const Switch = require('mofron-comp-clksw');
const Click  = require('mofron-event-click');
const efSize = require('mofron-effect-size');

mf.comp.Accordion = class extends mf.Component {
    /**
     * initialize component
     * 
     * @param (mixed) title parameter
     *                object: component option
     * @pmap title
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('Accordion');
            this.prmMap('title');
            this.prmOpt(po);
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
            this.title("");

            this.child([this.title(), this.contents()]);
            this.target(this.contents().target());
            this.styleTgt(this.target());
            
	    this.height("2rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * accordion title
     * 
     * @param (component) title component
     * @return (component) title component
     * @type parameter
     */
    title (prm) {
        try {
	    if (undefined === prm) {
                /* getter */
		return this.innerComp("title");
	    }
	    /* setter */
	    if ("string" === typeof prm) {
                prm = new Text(prm);
	    }
            /* set click event */
            let clk = (c1,c2,c3) => {
                try { c3.folding(!c3.folding()); } catch (e) {
		    console.error(e.stack);
                    throw e;
	        }
	    }
            prm.event(new Click([clk,this]));
	    let wrp = new mf.Component({
	                  style: { "display" : "flex" },
                          child: prm
	              });
            this.innerComp("title", wrp);
            if (null !== this.height()) {
                this.height(this.height());
	    }
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
	    if (undefined !== prm) {
                prm.option({
                    style: { "overflow": "scroll" },
                    effect: [
                        new efSize({ height: "0rem", tag: "Accordion-Size", eid: 2 }),
                        new efSize({ tag: "Accordion-Size", eid: 3 })
                    ]
                });
	    }
            return this.innerComp("contents", prm, mf.Component);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * height config
     * 
     * @param (string (size)) accordion height
     * @return (string (size)) accordion height
     * @type parameter
     */
    height (prm, opt) {
        try {
	    if (undefined === prm) {
                return super.height();
	    }
	    let ttl = this.title();
	    let hei = null;
            try {
	        hei = mf.func.sizeDiff(prm, ttl.height());
	    } catch (e) {
                hei = prm;
	    }
	    hei = mf.func.getSize(hei);
	    if (0 > hei.value()) {
                hei.value(0);
	    }
            super.height(hei.toString(), opt);
	    this.contents().effect({ tag:"Accordion-Size", eid:3 }).height(hei.toString());
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
     * @type function
     */
    folding (prm) {
        try {
            if (undefined === prm) {
                /* getter */
		return this.member("folding", "boolean", prm, false);
	    }
	    /* setter */
	    let chg_sts = false;
            if ( (true === prm) && (false === this.folding()) ) {
                this.contents().execEffect(2);
		chg_sts = true;
	    } else if ( (false === prm) && (true === this.folding()) ) {
		this.contents().execEffect(3);
		chg_sts = true
	    }
            this.member("folding", "boolean", prm);
	    if (true === chg_sts) {
                let evt = this.changeEvent();
		for (let eidx in evt) {
                    evt[eidx][0](this, this.folding(), evt[eidx][1]);
		}
	    }
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * folding speed
     * 
     * @param (number) folding speed
     * @return (number) folding speed
     * @type parameter
     */
    speed (prm) {
        try {
            let ef_siz = this.contents().effect({ tag: "Accordion-Size" });
            if (undefined === prm) {
                /* getter */
		return ef_siz[0].speed();
	    }
	    /* setter */
            for (let idx in ef_siz) {
                ef_siz[idx].speed(prm);
	    }
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * change event function setter/getter
     *
     * @param (function) change event function
     * @param (mixed) function parameter
     * @return (array) [[function, parameter],..]
     * @type parameter
     */
    changeEvent (fnc, prm) {
        try {
            if ( (undefined !== fnc) && ('function' !== typeof fnc) ) {
                throw new Error('invalid parameter');
            }
            return this.arrayMember(
                'changeEvent',
                'object',
                (undefined === fnc) ? undefined : [fnc, prm]
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.Accordion;
/* end of file */
