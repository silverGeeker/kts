import React from 'react';
import "./PointGrid.css";

export default function PointGrid() {

  return (
    <div>
    <div class="bg-light py-5 service-5">
    <div class="container">
        
        <div class="row"> 
            
            <div class="col-md-4 wrap-service5-box">
                <div class="card card-shadow border-0 mb-4">
                    <div class="card-body d-flex">
                        <div class="mr-4 mb-2 text-success-gradiant icon-size">O</div>
                        <div class="">
                            <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">Online Classes</a></h6>
                            <p class="mt-3">You can relay on our amazing features list and also our services.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4 wrap-service5-box">
                <div class="card card-shadow border-0 mb-4">
                    <div class="card-body d-flex">
                        <div class="mr-4 mb-2 text-success-gradiant icon-size">F</div>
                        <div class="">
                            <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">Good Faculties </a></h6>
                            <p class="mt-3">You can relay on our amazing features list and also our customer services.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4 wrap-service5-box">
                <div class="card card-shadow border-0 mb-4">
                    <div class="card-body d-flex">
                        <div class="mr-4 mb-2 text-success-gradiant icon-size">C</div>
                        <div class="">
                            <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking"> Complete Course </a></h6>
                            <p class="mt-3">You can relay on our amazing features list and also our customer services.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
						{/*<div class="col-md-12 mt-3 text-center">
                <a class="btn btn-success-gradiant btn-md border-0 text-white"><span>View Details</span></a>
            </div>*/}
        </div>
    </div>
</div>

</div>
  );
}