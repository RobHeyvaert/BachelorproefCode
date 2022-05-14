import React from 'react';

export function ConfirmToast({ toggle }) {
  return (
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
