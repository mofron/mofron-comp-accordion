/**
 * @file   mofron-comp-accordion/index.js
 * @brief  accordion component for mofron
 * @author simpart
 */
const mf     = require('mofron');
const Text   = require('mofron-comp-text');
const Switch = require('mofron-comp-switch');
const Horiz  = require('mofron-layout-horizon');
const Click  = require('mofron-event-click');
const VisClk = require('mofron-event-visiclick');

/**
 * @class comp.Accordion
 * @brief accordion component for mofron
 */
mf.comp.Accordion = class extends mf.Component {
    
    constructor (po, p2) {
        try {
            super();
            this.name('Accordion');
            this.prmMap(['headComp', 'child']);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize DOM contents
     * 
     * @note private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            
            /* init status component */
            let sts = new Switch([
                new Text('-'),
                new Text('+')
            ]);
            this.stsComp(sts);
            
            /* init index component */
            let conts   = new mf.Component();
            let clk_swh = (clk1_cmp, clk2, clk3_prm) => {
                try {
                    /* change open status */
                    clk3_prm.isOpen(!clk3_prm.isOpen());
                    sts.swComp();
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }
            let idx = new mf.Component({
                layout : [ new Horiz() ],
                event  : [
                    new Click([clk_swh, this]),
                    new VisClk('switch', conts)
                ],
                child  : [ this.stsComp(), this.headComp() ]
            });
            this.child([idx, conts]);
            
            this.target(conts.target());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * status component setter/getter
     *
     * @param p1 (Component) set status component
     * @param p1 (undefined) call as getter
     * @return (Component) status component
     */
    stsComp (prm) {
        try { return this.innerComp('stsComp', prm, mf.Component); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * head component setter/getter
     *
     * @param p1 (Component) set head component
     * @param p1 (undefined) call as getter
     * @return (Component) head component
     */
    headComp (prm) {
        try {
            let ret = this.innerComp('headComp', prm, mf.Component);
            if (undefined !== prm) {
                prm.sizeValue('margin-left', '0.1rem');
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * change event function setter/getter
     *
     * @param p1 (function) change event function
     * @param p1 (undefined) call as getter
     * @param p2 (mixed) function parameter
     * @return (array) [function, parameter]
     */
    changeEvent (fnc, prm) {
        try {
            if ( (undefined !== fnc) && ('function' === typeof fnc) ) {
                throw new Error('invalid parameter');
            }
            return this.arrayMember(
                'changeEvent',
                'array',
                (undefined === prm) ? undefined : [fnc, prm]
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * open status setter/getter
     *
     * @param p1 (boolean) set open status
     * @param p1 (undefined) call as getter
     * @return (boolean) open status
     */
    isOpen (prm) {
        try {
            let ret = this.member('isOpen', 'boolean', prm, true);
            if (undefined !== prm) {
                /* execute change event */
                let evt = this.changeEvent();
                for (let eidx in evt) {
                    evt[eidx][0](this, prm, evt[eidx][1]);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.Accordion;
/* end of file */
