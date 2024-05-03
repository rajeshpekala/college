import React from 'react'

const Updates = () => {
  return (
    <div name="update" className="w-full">
      <h1 className="text-2xl font-bold underline flex justify-center mt-8">
        Latest Updates
      </h1>
      <div className="xl:flex xl:flex-row mx-auto flex flex-col">
        <div className="xl:w-1/3 w-80 h-96 border border-black rounded-md flex flex-col bg-emerald-200 m-1">
          <h1 className="text-xl font-bold">Academic Syllabus</h1>
          <ul className="font-semibold ml-2">
            <li>Ug-R19-Regulation</li>
            <li>Ug-R19-Regulation</li>
            <li>Ug-R19-Regulation</li>
            <li>Ug-R19-Regulation</li>
          </ul>
        </div>
        <div className="xl:w-1/3 w-80 h-96 border border-black rounded-md flex flex-col m-1 bg-emerald-200">
          <h1 className="text-xl font-bold">TimeTable and Results</h1>
          <ul className="font-semibold ml-2 overflow-y:auto">
            <li>Ug-R19-Results</li>
            <li>Ug-R19-Timetable</li>
            <li>Ug-R21-Results</li>
            <li>Ug-R21-TimeTable</li>
          </ul>
        </div>
        <div className="xl:w-1/3 w-80 h-96 border border-black rounded-md flex flex-col m-1 bg-emerald-200">
          <h1 className="text-xl font-bold ">
            Notifications and Previous papers
          </h1>
          <ul className="font-semibold ml-2">
            <li>Zoology</li>
            <li>Botany</li>
            <li>Maths</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Updates