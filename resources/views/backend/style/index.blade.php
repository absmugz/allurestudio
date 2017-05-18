<!-- Current Tasks -->
    @if (count($styles) > 0)
        <div class="panel panel-default">
            <div class="panel-heading">
                Current Styles
            </div>

            <div class="panel-body">
                <table class="table table-striped task-table">

                    <!-- Table Headings -->
                    <thead>
                        <th>Style</th>
                        <th>&nbsp;</th>
                    </thead>

                    <!-- Table Body -->
                    <tbody>
                        @foreach ($styles as $style)
                            <tr>
                                <!-- Task Name -->
                                <td class="table-text">
                                    <div>{{ $style->name }}</div>
                                </td>

                              
                                    <!-- TODO: Delete Button -->
                                    <td>
        
            {!! Form::open(array('route' => array('admin.style.destroy', $style->id), 'method' => 'POST'))  !!}
            
           
            
           
            
            {{ csrf_field() }}
            {{ method_field('DELETE') }}

            <button>Delete Style</button>
        </form>
    </td>
                               
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    @endif