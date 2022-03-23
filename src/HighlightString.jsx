
/**
 * A component to automatically highlight a sub-string when it's found in a target string and display the result
 * @param {string} props.strTarget - The full string to display.
 * @param {string} props.subStr - The sub-string to highlight.
 */
export default function HighlightString(props)
{
  //whole string
  var strTarget = props.strTarget;
  //string to look for
  var subStr = props.subStr;
  //regex object
  var reg = new RegExp(subStr, 'gi');
  
  //If the substring occured in the target string, surround it with |[ and ]| markers
  var marked_str =strTarget.replace(reg, function(str) {return '|['+str+']|'});
  
  //split by | into array
  var arr = marked_str.split('|');
  
  //Map the array into a new variable that will contain the returned elements
  var result = arr.map(function(s){
  //if it starts with [ and ends with ], then it's a highlighted substring
    if(s.startsWith('[')&& s.endsWith(']'))
    {
    // clean it of any |,[ or ]
      s=s.replace(/\||\[|\]/g, '');
      //return the highlighted string encapsulated in a b tag with the class "highlight" applied. 
      return (<b className='highlight'>{s}</b>)
    }
    else
    {
    //If it's a normal entry, just return it encapsulated in a fragment.
      return (<>{s}</>)
    }
  }); 
  //return the string with the highlighted parts all between p tags
  if(result)
  return <p>{result}</p>;
  else
    return <p></p>
}