(()=>{"use strict";const e=window.wp.hooks,o=window.wp.i18n;(0,e.addFilter)("generate_typography_element_groups","generatepress-pro/customizer/add-typography-groups",(function(e){const a={};return gpCustomizerControls.hasSecondaryNav&&(a.secondaryNavigation=(0,o.__)("Secondary Navigation","gp-premium")),gpCustomizerControls.hasMenuPlus&&(a.offCanvasPanel=(0,o.__)("Off-Canvas Panel","gp-premium")),gpCustomizerControls.hasWooCommerce&&(a.wooCommerce=(0,o.__)("WooCommerce","gp-premium")),{...e,...a}})),(0,e.addFilter)("generate_typography_elements","generatepress-pro/customizer/add-typography-elements",(function(e){const a={};return gpCustomizerControls.hasSecondaryNav&&(a["secondary-nav-menu-items"]={module:"secondary-nav",group:"secondaryNavigation",label:(0,o.__)("Secondary Menu Items","gp-premium"),placeholders:{fontSize:{value:"13",min:6,max:30,step:1}}},a["secondary-nav-sub-menu-items"]={module:"secondary-nav",group:"secondaryNavigation",label:(0,o.__)("Secondary Sub-Menu Items","gp-premium"),placeholders:{fontSize:{value:"12",min:6,max:30,step:1}}},a["secondary-nav-menu-toggle"]={module:"secondary-nav",group:"secondaryNavigation",label:(0,o.__)("Secondary Mobile Menu Toggle","gp-premium"),placeholders:{fontSize:{value:"13",min:6,max:30,step:1}}}),gpCustomizerControls.hasMenuPlus&&(a["off-canvas-panel-menu-items"]={module:"off-canvas-panel",group:"offCanvasPanel",label:(0,o.__)("Off-Canvas Menu Items","gp-premium"),placeholders:{fontSize:{value:"",min:6,max:30,step:1}}},a["off-canvas-panel-sub-menu-items"]={module:"off-canvas-panel",group:"offCanvasPanel",label:(0,o.__)("Off-Canvas Sub-Menu Items","gp-premium"),placeholders:{fontSize:{value:"",min:6,max:30,step:1}}}),gpCustomizerControls.hasWooCommerce&&(a["woocommerce-catalog-product-titles"]={module:"woocommerce",group:"wooCommerce",label:(0,o.__)("Catalog Product Titles","gp-premium"),placeholders:{fontSize:{value:"",min:6,max:50,step:1}}},a["woocommerce-related-product-titles"]={module:"woocommerce",group:"wooCommerce",label:(0,o.__)("Related/Upsell Product Titles","gp-premium"),placeholders:{fontSize:{value:"",min:6,max:50,step:1}}}),{...e,...a}}))})();