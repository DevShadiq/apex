/** @format */

var vSrv = $('#P_REP_SERVER').val();
var vFrm = $('#P_FORMAT').val();
var vLog = $('#P_LOGON_USER').val();
var vPt = $('#P_REP_PATH').val();
var v_com = $('#G_COMPANY_ID').val();
var v_unit = $('#G_PROJ_ID').val();
var vFdt = $('#P4_FORM_DATE').val();
var vTdt = $('#P4_TO_DATE').val();
var vChln = $('#P4_INV_ID').val();
var vDis = $('#P4_DIST_ID').val();
var vprd = $('#P4_PRODUCT_ID').val();
var vFym = $('#P4_FROMYYYYMM').val();
var vTym = $('#P4_TOYYYYMM').val();
$('#P4_RG').on('change', function () {
  $val = apex.item('P4_RG').getValue();
});
if ($val == 63) {
  window.open(
    vSrv +
      vFrm +
      vLog +
      vPt +
      '\\Reports\\MUSHAK_63.RDF&P_INV_NO=' +
      vChln +
      vPt +
      '\\Reports\\MUSHAK_63.RDF&G_COMPANY_ID=' +
      v_com
  );
} else if ($val == 1) {
  window.open(
    vSrv +
      vFrm +
      vLog +
      vPt +
      '\\Reports\\vat_stmt_summary_all_p.RDF&P_FROM_DATE=' +
      vFdt +
      vPt +
      '\\Reports\\vat_stmt_summary_all_p.RDF&P_TO_DATE=' +
      vTdt +
      vPt +
      '\\Reports\\vat_stmt_summary_all_p.RDF&P_UNIT=' +
      v_unit +
      vPt +
      '\\Reports\\vat_stmt_summary_all_p.RDF&G_COMPANY_ID=' +
      v_com
  );
} else if ($val == 2) {
  window.open(
    vSrv +
      vFrm +
      vLog +
      vPt +
      '\\Reports\\vat_statement.RDF&P_FROM_DATE=' +
      vFdt +
      vPt +
      '\\Reports\\vat_statement.RDF&P_TO_DATE=' +
      vTdt +
      vPt +
      '\\Reports\\vat_statement.RDF&P_UNIT=' +
      v_unit +
      vPt +
      '\\Reports\\vat_statement.RDF&G_COMPANY_ID=' +
      v_com
  );
} else if ($val == 3) {
  window.open(
    vSrv +
      vFrm +
      vLog +
      vPt +
      '\\Reports\\vat_stmt_dtl_dist_w.RDF&P_FROM_DATE=' +
      vFdt +
      vPt +
      '\\Reports\\vat_stmt_dtl_dist_w.RDF&P_TO_DATE=' +
      vTdt +
      vPt +
      '\\Reports\\vat_stmt_dtl_dist_w.RDF&P_UNIT=' +
      v_unit +
      vPt +
      '\\Reports\\vat_stmt_dtl_dist_w.RDF&P_DIST_ID=' +
      vDis +
      vPt +
      '\\Reports\\vat_statement.RDF&G_COMPANY_ID=' +
      v_com
  );
} else if ($val == 4) {
  window.open(
    vSrv +
      vFrm +
      vLog +
      vPt +
      '\\Reports\\vat_stmt_dtl_prod_w.RDF&P_DATE1=' +
      vFdt +
      vPt +
      '\\Reports\\vat_stmt_dtl_prod_w.RDF&P_DATE2=' +
      vTdt +
      vPt +
      '\\Reports\\vat_stmt_dtl_dist_w.RDF&P_UNIT=' +
      v_unit +
      vPt +
      '\\Reports\\vat_stmt_dtl_prod_w.RDF&P_PRODUCT_ID=' +
      vprd +
      vPt +
      '\\Reports\\vat_statement.RDF&G_COMPANY_ID=' +
      v_com
  );
} else if ($val == 5) {
  window.open(
    vSrv +
      vFrm +
      vLog +
      vPt +
      '\\Reports\\stock_FG.RDF&P_FROM_DATE=' +
      vFdt +
      vPt +
      '\\Reports\\stock_FG.RDF&P_TO_DATE=' +
      vTdt +
      vPt +
      '\\Reports\\stock_FG.RDF&P_UNIT=' +
      v_unit +
      vPt +
      '\\Reports\\stock_FG.RDF&G_COMPANY_ID=' +
      v_com
  );
} else if ($val == 6) {
  window.open(
    vSrv +
      vFrm +
      vLog +
      vPt +
      '\\Reports\\PD_COMPARISM.RDF&p_PRODUCT_CODE=' +
      vprd +
      vPt +
      '\\Reports\\PD_COMPARISM.RDF&G_COMPANY_ID=' +
      v_com
  );
} else if ($val == 7) {
  window.open(
    vSrv +
      vFrm +
      vLog +
      vPt +
      '\\Reports\\SALES_REPORT_MONTHLY.RDF&P_FROM_DATE=' +
      vFym +
      vPt +
      '\\Reports\\SALES_REPORT_MONTHLY.RDF&P_TO_DATE=' +
      vTym +
      vPt +
      '\\Reports\\SALES_REPORT_MONTHLY.RDF&G_COMPANY_ID=' +
      v_com
  );
} else if ($val == 8) {
  window.open(
    vSrv +
      vFrm +
      vLog +
      vPt +
      '\\Reports\\SALES_REPORT_YEARLY.RDF&P_FROM_DATE=' +
      vFym +
      vPt +
      '\\Reports\\SALES_REPORT_YEARLY.RDF&P_TO_DATE=' +
      vTym +
      vPt +
      '\\Reports\\SALES_REPORT_YEARLY.RDF&G_COMPANY_ID=' +
      v_com
  );
} else if ($val == 9) {
  window.open(
    vSrv +
      vFrm +
      vLog +
      vPt +
      '\\Reports\\date_wise_sales.RDF&p_date1=' +
      vFdt +
      vPt +
      '\\Reports\\date_wise_sales.RDF&p_date2=' +
      vTdt +
      vPt +
      '\\Reports\\date_wise_sales.RDF&G_COMPANY_ID=' +
      v_com
  );
} else if ($val == 10) {
  window.open(
    vSrv +
      vFrm +
      vLog +
      vPt +
      '\\Reports\\VALUE_COMPERISM.RDF&p_from_date=' +
      vFdt +
      vPt +
      '\\Reports\\VALUE_COMPERISM.RDF&p_to_date=' +
      vTdt +
      vPt +
      '\\Reports\\VALUE_COMPERISM.RDF&G_COMPANY_ID=' +
      v_com
  );
} else {
  alert('Sorry not!');
}
