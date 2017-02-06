/**
 * @file accordion.js
 * @author simpart
 */

/**
 * @class mofron.comp.Accordion
 * @brief Accordion Component class
 */
mofron.comp.Accordion = class extends mofron.Component {
    
    constructor (prm,opt) {
        try {
            super(prm);
            this.setBaseName('Accordion');
            this.name('Accordion');
            
            this.chg_evt = null;
            
            if (null !== opt) {
                this.option(opt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize DOM contents
     * 
     * @param vd : (mofron.util.Vdom) vdom object
     */
    initDomConts (prm) {
        try {
            this.target(this.vdom());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setChangeEvt (fnc) {
        try {
            if (null === fnc) {
                throw new Error('invalid parameter');
            }
            this.chg_evt = fnc;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    add (ttl,cnt) {
        try {
            if ( (undefined === cnt) ||
                 (null      === cnt) ||
                 ('object'  !== (typeof cnt)) ) {
                throw new Error('invalid parameter');
            }
            
            var hdg_thm = this.theme().getComp('Heading');
            if (null === hdg_thm) {
                hdg_thm = mofron.comp.Heading;
            }
            var hdg = new hdg_thm(ttl,{
                          level : 2
                      });
            hdg.addEvent(new mofron.event.Click(function(clk_prm) {
                try {
                    var acd_obj = clk_prm[0];
                    var conts   = clk_prm[1];
                    var idx     = clk_prm[2];
                    conts.visible(!(acd_obj.state(idx)));
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            },[this,cnt,this.getChild().length]));
            
            var wrp = new mofron.Component();
            wrp.addChild(hdg);
            wrp.addChild(cnt, false);
            
            this.addChild(wrp);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    remove (idx) {
        try {
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    state (idx) {
        try {
            if ('number' !== typeof idx) {
                throw new Error('invalid parameter');
            }
            var chdlen = this.getChild();
            if ((chdlen.length <= idx) || (0 > idx)) {
                throw new Error('invalid parameter');
            }
            
            if (false === chdlen[idx].isRendered()) {
                return false;
            }
            var disp = chdlen[idx].getChild(1).vdom().style('display');
            if ('none' === disp) {
                return false;
            } else {
                return true;
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
