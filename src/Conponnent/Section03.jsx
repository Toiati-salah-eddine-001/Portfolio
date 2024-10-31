






function Section03() {
    return (
      <div className="bg-gray-900 py-16 text-center text-white">
        <h2 className="text-2xl font-bold mb-8">Compétences Techniques</h2>
        <div className="flex flex-col items-center space-y-8">
          
          {/* Row 1 */}
          <div className="flex space-x-20">
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
                <img src="html.png" width="100px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
            <img src="css.png" width="100px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
            <img src="JS.png" width="100px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
            <img src="PhP.png" width="100px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
            <img src="Py.png" width="90px"/>
            </div>
            
          </div>
          
          {/* Divider Line */}
          <div className="w-1/2 border-t-2 border-green-600"></div>
          
          {/* Row 2 */}
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
            <img src="React.png" width="90px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
            <img src="Laravel.png" width="75px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
            <img src="Nodejs.png" width="90px"/>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-4 mt-4">
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
            <img src="Bootstrape.png" width="90px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
            <img src="Thilwind.png" width="90px"/>
            </div>
          </div>
  
          {/* Divider Line */}
          <div className="w-1/2 border-t-2 border-green-600"></div>
  
          {/* Row 3 */}
          <div className="flex space-x-4">
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
                <img src="sql.png" width="90px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
                <img src="Mysql.png" width="90px"/>
            </div>
            <div className="w-28 h-28 bg-white rounded-full flex justify-center items-center">
                <img src="Mongodb.png" width="90px"/>
            </div>
          </div>
  
          {/* Final Divider Line */}
          <div className="w-1/2 border-t-2 border-green-600"></div>
        </div>
      </div>
  )
}

export default Section03
  