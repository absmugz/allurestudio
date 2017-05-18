<div class="panel-body">
        <!-- Display Validation Errors -> resources/views/common/errors.blade.php-->
 

@if (count($errors) > 0)
    <!-- Form Error List -->
        <strong>Whoops! Something went wrong!</strong>

        <br><br>

        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
   
@endif

        <!-- New Task Form -->
       
              {!! Form::open( [ 'route' => 'admin.style.store', 'method' => 'POST'] ) !!}
            {{ csrf_field() }}

            <!-- Task Name -->
            <div class="form-group">
                <label for="task" class="col-sm-3 control-label">Style</label>

                <div class="col-sm-6">
                    <input type="text" name="name" id="style-name" class="form-control">
                </div>
            </div>

            <!-- Add Task Button -->
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-6">
                    <button type="submit" class="btn btn-default">
                        <i class="fa fa-plus"></i> Add Style
                    </button>
                </div>
            </div>
        </form>
    </div>
