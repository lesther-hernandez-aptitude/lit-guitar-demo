export interface Catalog {
    total: number;
    items: Item[];
    facets: Facet[];
    corrections: any[];
    locale: Locale;
    backend: string;
    links: any[];
    volatility: string;
    code: number;
    warnings: Warnings;
}
export interface Facet {
    id: string;
    url: null | string;
    values: FacetValue[];
    min?: number;
    max?: number;
    ranges?: any[];
}
export interface FacetValue {
    url: string;
    label: null | string;
}
export interface Item {
    custitem_ef_badges: Custitem;
    custitemcustitem_sizing_list: Custitem;
    storedisplayname: string;
    custitem_finish: Custitem;
    custitem_kd_hidesku_toggle: boolean;
    custitem_ns_pr_rating: number | null;
    matrixchilditems_detail: MatrixchilditemsDetail[];
    custitem_ns_pr_count: number | null;
    ispurchasable: boolean;
    stockdescription: string;
    itemimages_detail: ItemimagesDetail;
    onlinecustomerprice_detail: OnlinecustomerpriceDetail;
    custitem7: null;
    custitem_kdl_shown_in: null;
    internalid: number;
    featureddescription: string;
    itemoptions_detail: ItemoptionsDetail;
    outofstockmessage: string;
    custitem_ns_ib_badges: Custitem;
    storedescription: string;
    pricelevel1_formatted: null | string;
    custitem_ns_ib_show_badges: boolean;
    isinstock: boolean;
    onlinecustomerprice: number | null;
    dontshowprice: boolean;
    custitem_kd_swatch: string;
    itemid: string;
    custitem_kd_guitarcolor_list: null | string;
    custitem_is_pickup: boolean;
    onlinecustomerprice_formatted: null | string;
    custitem_color_master_list: string;
    nopricemessage: string;
    isbackorderable: boolean;
    onlinematrixpricerange_formatted: null;
    custitem_kd_show_in_spotlight: boolean;
    onlinematrixpricerange: string;
    custitem_kdl_page_specs_type: null | string;
    showoutofstockmessage: boolean;
    outofstockbehavior: Outofstockbehavior;
    quantityavailable: number;
    displayname: string;
    storedisplayname2: string;
    pricelevel1: number | null;
    urlcomponent: string;
}
export declare enum Custitem {
    Empty = " ",
    GlossNatural = "Gloss Natural"
}
export interface ItemimagesDetail {
    "Satin Black"?: The3_ToneSunburstPearl3_Tsbp;
    "Satin Dark Roast"?: The3_ToneSunburstPearl3_Tsbp;
    urls?: URL[];
    "Satin Candy Apple Red"?: The3_ToneSunburstPearl3_Tsbp;
    "Green Burst"?: The3_ToneSunburstPearl3_Tsbp;
    "Trans Purple Burst (TPB)"?: The3_ToneSunburstPearl3_Tsbp;
    "Steele Green"?: The3_ToneSunburstPearl3_Tsbp;
    "Ticket to My Downfall Pink"?: The3_ToneSunburstPearl3_Tsbp;
    "Atomic Ink"?: The3_ToneSunburstPearl3_Tsbp;
    "Atomic Snow"?: The3_ToneSunburstPearl3_Tsbp;
    "Atomic Frost"?: The3_ToneSunburstPearl3_Tsbp;
    "Atomic Green"?: The3_ToneSunburstPearl3_Tsbp;
    "See-Thru Black (STBLK)"?: The3_ToneSunburstPearl3_Tsbp;
    "Blood Burst"?: The3_ToneSunburstPearl3_Tsbp;
    "Gloss Natural"?: The3_ToneSunburstPearl3_Tsbp;
    "Vintage Sunburst (VSB)"?: The3_ToneSunburstPearl3_Tsbp;
    "Black Cherry"?: The3_ToneSunburstPearl3_Tsbp;
    "Vintage Sunburst"?: The3_ToneSunburstPearl3_Tsbp;
    "Gloss Black"?: The3_ToneSunburstPearl3_Tsbp;
    "Gloss White"?: The3_ToneSunburstPearl3_Tsbp;
    "Black Pearl"?: The3_ToneSunburstPearl3_Tsbp;
    "Evil Twin"?: The3_ToneSunburstPearl3_Tsbp;
    "Cat's Eye Black Burst"?: The3_ToneSunburstPearl3_Tsbp;
    "See-Thru Blue Burst"?: The3_ToneSunburstPearl3_Tsbp;
    "Gloss White (WHT)"?: The3_ToneSunburstPearl3_Tsbp;
    "Red Reign"?: The3_ToneSunburstPearl3_Tsbp;
    "Green Reign"?: The3_ToneSunburstPearl3_Tsbp;
    "Birch Green (BGRN)"?: The3_ToneSunburstPearl3_Tsbp;
    "Riviera Blue (RBLU)"?: The3_ToneSunburstPearl3_Tsbp;
    "Blue Reign"?: The3_ToneSunburstPearl3_Tsbp;
    "Satin Black (SBK)"?: The3_ToneSunburstPearl3_Tsbp;
    "Purple Burst Pearl (PBP)"?: The3_ToneSunburstPearl3_Tsbp;
    "Aqua Burst Pearl"?: The3_ToneSunburstPearl3_Tsbp;
    "3-Tone Sunburst Pearl (3TSBP)"?: The3_ToneSunburstPearl3_Tsbp;
    "Black Pearl (BLKP)"?: The3_ToneSunburstPearl3_Tsbp;
}
export interface The3_ToneSunburstPearl3_Tsbp {
    urls: URL[];
}
export interface URL {
    altimagetext: string;
    url: string;
}
export interface ItemoptionsDetail {
    matrixtype: Matrixtype;
    fields?: Field[];
}
export interface Field {
    ismandatory: boolean;
    internalid: Internalid;
    ismatrixdimension: boolean;
    values: FieldValue[];
    label: Label;
    type: Type;
    sourcefrom: Sourcefrom;
}
export declare enum Internalid {
    CustcolColorMasterList = "custcol_color_master_list"
}
export declare enum Label {
    Color = "Color"
}
export declare enum Sourcefrom {
    CustitemColorMasterList = "custitem_color_master_list"
}
export declare enum Type {
    Select = "select"
}
export interface FieldValue {
    label: string;
    internalid?: string;
}
export declare enum Matrixtype {
    Parent = "parent"
}
export interface MatrixchilditemsDetail {
    custitem_trussrod: CustitemTrussrod;
    custitem_scale: string;
    custitem_topcontour: CustitemTopcontour | null;
    custitem_inlays: string;
    custitem_topmaterial: CustitemTopmaterial | null;
    custitem_neckpickup: null | string;
    maximumquantity: null;
    minimumquantity: null;
    ispurchasable: boolean;
    custitem_itemnumber: string;
    custitem_kd_pickup_logo: string;
    stockdescription: string;
    custitem_strings: string;
    custitem_kd_pickup_spacing: null;
    custitem_kd_pickup_baseplate: string;
    storedetaileddescription: string;
    custitem_bridgepickup: string;
    custitem_thickness: string;
    custitem_construction: CustitemConstruction;
    custitem_kd_pickup_magnet: string;
    custitem_nutwidth: string;
    onlinecustomerprice_detail: OnlinecustomerpriceDetail;
    custitem_kd_pickupconfiguration: string;
    custitem_bridge: string;
    custitem6: boolean;
    custitem_bodymaterial: CustitemBodymaterial;
    custitem3: string;
    internalid: number;
    custitem2: string;
    custitem_kd_pickup_wiringdesign: string;
    custitem4: string;
    outofstockmessage: string;
    custitem_kd_pickup_desc: string;
    custitem_hardwarecolor: string;
    custitem_neckmaterial: string;
    custitem1: string;
    custitem_kd_pickup_polepcs: string;
    storedescription: string;
    pricelevel1_formatted: string;
    custitem_frets: CustitemFrets;
    custitem_ns_ib_show_badges: boolean;
    isinstock: boolean;
    custitem_binding: null | string;
    custitem_batterycompartment: CustitemBatterycompartment | null;
    custitem_kd_swatch: string;
    custitem_guitarcolorshown: string;
    itemid: string;
    custitem_case: CustitemCase;
    custitem_kd_pickup_outputfullpower: string;
    custitem_color_master_list?: string;
    custitem_kd_videourl: string;
    custitem_nut: CustitemNut;
    isbackorderable: boolean;
    custitem_dexterity: CustitemDexterity;
    custitem_sidedotmarkers: null | string;
    custitem15: Custitem15;
    custitem16: Custitem16;
    custitem14: Custitem14;
    showoutofstockmessage: boolean;
    outofstockbehavior: Outofstockbehavior;
    custitem_fretboardradius: string;
    itemtype: Itemtype;
    quantityavailable: number;
    pricelevel5: number;
    pricelevel1: number;
    custitem_neckshape: CustitemNeckshape;
}
export declare enum Custitem14 {
    Empty = "",
    SGR1CCaseSoldSeparately = "SGR-1C \"Case Sold Separately\"",
    SGRUNIVERSALGUITARCaseSoldSeparately = "SGR-UNIVERSAL GUITAR \"Case Sold Separately\"",
    SGRUNIVERSALGuitarCase = "SGR-UNIVERSAL Guitar Case"
}
export declare enum Custitem15 {
    GripTipSpeedKnob = "Grip Tip Speed Knob",
    MetalDomeWSetScrew = "Metal Dome w/ Set Screw",
    MetalKnurledWSetScrew = "Metal Knurled w/ Set Screw"
}
export declare enum Custitem16 {
    CanadianRockMaple = "Canadian Rock Maple",
    Ebony = "Ebony",
    Maple = "Maple",
    RoastedMaple = "Roasted Maple",
    Rosewood = "Rosewood"
}
export declare enum CustitemBatterycompartment {
    Double9VoltClipInBatteryCompartment = "Double 9-volt Clip-in Battery Compartment",
    The9VoltClipInBatteryCompartment = "9-volt Clip-in Battery Compartment"
}
export declare enum CustitemBodymaterial {
    Alder = "Alder",
    CustitemBodymaterialSwampAsh = "Swamp Ash ",
    KhayaAfricanMahogany = "Khaya African Mahogany",
    Mahogany = "Mahogany",
    SwampAsh = "Swamp Ash"
}
export declare enum CustitemCase {
    The1620SGR1CCShapeHardcase = "1620 SGR-1C C-Shape Hardcase",
    The1622SGRUniversalGuitarHardcase = "1622 SGR-Universal Guitar Hardcase",
    The1630SGR2AAvengerHardcase = "1630 SGR-2A Avenger Hardcase",
    The1672SGRSoloIIHardcaseCaseSoldSeparately = "1672 SGR-Solo-II Hardcase \"Case Sold Separately\"",
    The1684SGR9SCSolo6HardcaseCaseSoldSeparately = "1684 SGR-9SC Solo-6 Hardcase \"Case Sold Separately\"",
    The1702SGRE1Hardcase = "1702 SGR-E-1 Hardcase"
}
export declare enum CustitemConstruction {
    BoltOn = "Bolt-on",
    BoltOnRecessed = "Bolt-On (Recessed)",
    NeckThruWUltraAccess = "Neck-Thru w/Ultra Access",
    SetNeck = "Set-Neck",
    SetNeckWUltraAccess = "Set-Neck w/Ultra Access"
}
export declare enum CustitemDexterity {
    LeftHanded = "Left Handed",
    RightHanded = "Right Handed"
}
export declare enum CustitemFrets {
    The22Jumbo = "22 Jumbo",
    The22XJumbo = "22 X-Jumbo",
    The22XJumboStainlessSteel = "22 X Jumbo Stainless Steel",
    The24Jumbo = "24 Jumbo",
    The24XJumbo = "24 X-Jumbo",
    The24XJumboStainlessSteel = "24 X-Jumbo Stainless Steel"
}
export declare enum CustitemNeckshape {
    C = "\"C\"",
    ThickC = "Thick \"C\"",
    ThinC = "Thin \"C\"",
    UltraThinC = "Ultra Thin \"C\"",
    VintageC = "Vintage \"C\""
}
export declare enum CustitemNut {
    ErnieBallCompensatedNut = "Ernie Ball Compensated Nut",
    FloydRose1500Series = "Floyd Rose 1500 Series",
    FloydRoseSpecial = "Floyd Rose Special",
    GraphTechXLBlackTusq = "Graph Tech XL Black Tusq",
    GraphTechXLIvoryTusq = "Graph Tech XL Ivory Tusq"
}
export declare enum CustitemTopcontour {
    ArchedTop = "Arched Top",
    FlatTop = "Flat Top"
}
export declare enum CustitemTopmaterial {
    FlamedMaple = "Flamed Maple",
    QuiltedMaple = "Quilted Maple"
}
export declare enum CustitemTrussrod {
    The2WayAdjustableRodW5324MmAllenNut = "2-Way Adjustable Rod w/ 5/32\" (4mm) Allen Nut",
    The2WayAdjustableRodWHeelAccessSpokeWheel = "2-Way Adjustable Rod w/ Heel Access Spoke Wheel"
}
export declare enum Itemtype {
    InvtPart = "InvtPart"
}
export interface OnlinecustomerpriceDetail {
    onlinecustomerprice_formatted: string;
    onlinecustomerprice: number;
}
export declare enum Outofstockbehavior {
    Default = "- Default -"
}
export interface Locale {
    country: string;
    language: string;
    currency: string;
    region: number;
}
export interface Warnings {
}
//# sourceMappingURL=catalog.interfaces.d.ts.map