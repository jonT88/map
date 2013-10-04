
<style type="text/css">
<!--
@import url("http://intranet.afservice.org/os/kpi/Documents/table%20style.css");
@import "http://live.datatables.net/media/css/demo_page.css";
@import "http://live.datatables.net/media/css/demo_table.css";
-->
</style> 


<!-- Link to the jQuery library -->
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.6.1.min.js" type="text/javascript"></script>

<!-- Link to the Templates plugin -->
<script src="http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.js" type="text/javascript"></script>


<script type="text/javascript" language="javascript" src="http://live.datatables.net/media/js/jquery.js"></script>
<script class="jsbin" src="http://datatables.net/download/build/jquery.dataTables.nightly.js"></script>
 

<script type="text/javascript">
 
$('#s4-searcharea').hide();

</script>
 
<!-- Template Container -->
<div id="Container">
		<table id="table_id">
			<thead>
				<tr>
					<th nowrap="" scope="col" onmouseover="OnChildColumn(this)" class="ms-vh2" id="msomenuid2">
	<div sortable="" sortdisable="" filterdisable="" filterable="" filterdisablemessage="" name="LinkTitle" ctxnum="474" displayname="Employee" fieldtype="Computed" resulttype="" sortfields="View={78f5f12e-2cb6-48d3-824d-ccd7db5e250a}&amp;SortField=LinkTitle&amp;SortDir=Asc" class="ms-vh-div">
		<a id="diidSortLinkTitle" onfocus="OnFocusFilter(this)" href="javascript:" onclick="javascript:return OnClickFilter(this,event);" sortingfields="View={78f5f12e-2cb6-48d3-824d-ccd7db5e250a}&amp;SortField=LinkTitle&amp;SortDir=Asc">Employee<img src="/_layouts/images/blank.gif" class="ms-hidden" border="0" width="1" height="1" alt="Use SHIFT+ENTER to open the menu (new window)."></a>
		<img src="/_layouts/images/blank.gif" alt="" border="0">
		<img src="/_layouts/images/blank.gif" border="0" alt="">
	</div>
	<div class="s4-ctx" style="top: 19203px; left: 127px; height: 32px; line-height: 32px; margin: 0px;">
		<span>&nbsp;</span>
		<a onfocus="OnChildColumn(this.parentNode.parentNode); return false;" onclick="PopMenuFromChevron(event); return false;" href="javascript:;" title="Open Menu">
			<img src="/_layouts/images/ecbarw.png" alt="Open Menu" style="visibility: hidden;">
		</a>
		<span>&nbsp;</span>
	</div>
</th>
					
					
					<th>Address</th>
					<th>Lat</th>
					<th>Lng</th>
				</tr>
			</thead>
			<tbody id="contactsContainer">
			</tbody>
		</table>
</div>
 
<!-- Template -->
<script id="contactTemplate" type="text/x-jquery-tmpl">

    <tr>    
        <td><strong><a target="_self" href="javascript:EditItem2(null, 'http://intranet.afservice.org/os/kpi/_layouts/listform.aspx?PageType=4&ListId={987629F0-0E13-4F65-8CC4-E99BADCCC1E6}&ID=${ Id }&ContentTypeID=${ ContentTypeID }')">${ Employee }</a></strong></td>
		<td>${Address}</td>
		<td>${Longitude}</td>
		<td>${Latitude}</td>		
    </tr>
		
</script>

 
<!-- Data -->
<script type="text/javascript">
     
        $(document).ready(function () {
     
            // Get the list data.
            $.getJSON(
                "../_vti_bin/ListData.svc/AddressList?$orderby=Employee&$filter=City eq 'Quezon City'", 
                function(data) {
     
                   $('#contactTemplate')                  // Select the template. 
                       .tmpl(data.d.results)              // Bind it to the data. 
                       .appendTo('#contactsContainer');   // Render the output.
               }
			);
		   
			$(document).ready(function() 
			{
				$('#table_id').dataTable();
			} );
			
		});
	   
	   function countProperties(obj) {
			var prop;
			var propCount = 0;

			for (prop in obj) {
				propCount++;
			}
		return propCount;
		}   
	   
</script>


