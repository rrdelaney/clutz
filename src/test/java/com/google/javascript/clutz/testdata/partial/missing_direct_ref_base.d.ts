// Generated from src/test/java/com/google/javascript/clutz/testdata/partial/missing_direct_ref_base.js
declare namespace ಠ_ಠ.clutz.module$exports$missing$extend {
  export import ClassExtendingMissing = ಠ_ಠ.clutz.module$contents$missing$extend_ClassExtendingMissing ;
  export import ClassExtendingMissingTemplated = ಠ_ಠ.clutz.module$contents$missing$extend_ClassExtendingMissingTemplated ;
  export import ClassExtendingMissingWithParam = ಠ_ಠ.clutz.module$contents$missing$extend_ClassExtendingMissingWithParam ;
}
declare module 'goog:missing.extend' {
  import extend = ಠ_ಠ.clutz.module$exports$missing$extend;
  export = extend;
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/partial/missing_direct_ref_base.js
declare namespace ಠ_ಠ.clutz {
  class module$contents$missing$extend_ClassExtendingMissing extends ಠ_ಠ.clutz.direct.ref.A {
    private noStructuralTyping_module$contents$missing$extend_ClassExtendingMissing : any;
    constructor ( ) ;
  }
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/partial/missing_direct_ref_base.js
declare namespace ಠ_ಠ.clutz {
  class module$contents$missing$extend_ClassExtendingMissingTemplated extends ಠ_ಠ.clutz.direct.ref.ATemplated < string , number > {
    private noStructuralTyping_module$contents$missing$extend_ClassExtendingMissingTemplated : any;
    constructor ( ) ;
  }
}
// Generated from src/test/java/com/google/javascript/clutz/testdata/partial/missing_direct_ref_base.js
declare namespace ಠ_ಠ.clutz {
  class module$contents$missing$extend_ClassExtendingMissingWithParam extends ಠ_ಠ.clutz.direct.ref.A {
    private noStructuralTyping_module$contents$missing$extend_ClassExtendingMissingWithParam : any;
    constructor (x : number ) ;
  }
}
