

    public Difference(int[] elements){
        this.elements = elements;
    }
	// Add your code here
    public void computeDifference(){
        int[] arr = this.elements;
        
        maximumDifference = Math.abs( arr[1] - arr[0] ); 
        for (int i = 0; i < this.elements.length; i++) 
        { 
            for (int j = i+1; j < this.elements.length; j++) 
            {      
                int diff =  Math.abs(arr[j] - arr[i]);
                if ( diff > maximumDifference)
                {
                    maximumDifference = diff;
                }
            }  
        }          
    }

