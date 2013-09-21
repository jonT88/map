
<!-- Link to the jQuery library -->
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.6.1.min.js" type="text/javascript"></script>
<!-- Link to the Templates plugin -->
<script src="http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.js" type="text/javascript"></script>
 
<!-- Template Container -->
<div id="Container">
		<table id="table_id" border=1, cellpadding=2>
			<thead>
				<tr>
					<th>Employee Name</th>
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
                '../_vti_bin/ListData.svc/AddressList?$orderby=Employee', 
                function(data) {
     
                   $('#contactTemplate')                  // Select the template. 
                       .tmpl(data.d.results)              // Bind it to the data. 
                       .appendTo('#contactsContainer');   // Render the output.
               }
           );
       });
</script>


