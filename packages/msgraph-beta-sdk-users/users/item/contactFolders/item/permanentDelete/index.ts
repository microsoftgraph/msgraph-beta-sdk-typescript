/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the permanentDelete method.
 */
export interface PermanentDeleteRequestBuilder extends BaseRequestBuilder<PermanentDeleteRequestBuilder> {
    /**
     * Permanently delete a contact folder and remove its items from the user's mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     * @see {@link https://learn.microsoft.com/graph/api/contactfolder-permanentdelete?view=graph-rest-beta|Find more info here}
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Permanently delete a contact folder and remove its items from the user's mailbox. For more information about item retention, see Configure Deleted Item retention and Recoverable Items quotas.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const PermanentDeleteRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/contactFolders/{contactFolder%2Did}/permanentDelete";
/**
 * Metadata for all the requests in the request builder.
 */
export const PermanentDeleteRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: PermanentDeleteRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
};
/* tslint:enable */
/* eslint-enable */