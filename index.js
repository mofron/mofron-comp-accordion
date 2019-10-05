/**
 * @file   mofron-comp-accordion/index.js
 * @brief  accordion component for mofron
 * @attention it needs to height parameter for enabling animation.
 * @author simpart
 */
const mf      = require('mofron');
const Text    = require('mofron-comp-clktext');
const Click   = require('mofron-event-click');
const efSize  = require('mofron-effect-size');
const SyncHei = require('mofron-effect-synchei');

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
            this.child([this.title(), this.contents()]);
            this.target(this.contents().target());
	    this.styleTgt(this.target());
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
            if (undefined !== prm) {
                prm = ("string" === typeof prm) ? new Text(prm) : prm;
		let fld_evt = (fe1,fe2,fe3) => {
                    try { fe3.folding(!fe3.folding()); } catch (e) {
                        console.error(e.stack);
			throw e;
		    }
		}
                prm.option({ event: new Click([fld_evt,this]) });
	    }
            return this.innerComp("title", prm, mf.Component);
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
                        new efSize({
			    height: "0rem", tag: "Accordion-Size",
			    eid: 2, forced: true
			}),
                        new efSize({
			    height: null, tag: "Accordion-Size",
			    eid: 3, forced: true
			})
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
                /* getter */
		return mf.func.sizeSum(this.title().height(), super.height());
	    }
	    /* setter */
	    let set = mf.func.sizeDiff(prm, this.title().height());
            this.contents().effectOpt(
	        { height: set },
                { tag: "Accordion-Size", eid: 3 }
	    );
            super.height(set, opt);
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
	    /* setter */
            if ( ("boolean" === typeof prm) && (prm !== this.folding()) ) {
                this.contents().execEffect((true === prm) ? 2 : 3);
		let evt = this.changeEvent();
		for (let eidx in evt) {
		    evt[eidx][0](this, prm, evt[eidx][1]);
                }
	    }
	    return this.member("folding", "boolean", prm, false);
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
	    return this.contents().effectOpt(
	        { speed:prm },
                { tag: "Accordion-Size" }
	    );
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
