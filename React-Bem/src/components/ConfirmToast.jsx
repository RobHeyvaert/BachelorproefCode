import React from 'react';

export function ConfirmToast({ toggle }) {
  return (
    /*<Toast onClose={() => toggle(false)}>
        <Toast.Header closeButton={false}>
            <strong className="me-auto">What a wonderfull world!</strong>
            <small>Just now!</small>
        </Toast.Header>
        <Toast.Body>
            You have just chosen a great destination, have fun! 
        </Toast.Body>
    </Toast>*/
    <div class="Toast">
      <div class="Toast__header">
        <strong>Come fly with me!</strong>
        <small>Just now!</small>
      </div>
      <div class="Toast__body">
        <p>You have just chosen a great destination, have fun! </p>
      </div>
    </div>
  );
}
